from celery import shared_task
from api.models import RequirenmentToGetAchieve, Achievement, UserProfile, AchievementUserStatus


# @shared_task
def get_achievment():
    from api.models import RequirenmentToGetAchieve, Achievement, UserProfile, AchievementUserStatus
    achievements = Achievement.objects.all().prefetch_related("requirenmenttogetachieve_set")
    requirements_fields = [f.name for f in RequirenmentToGetAchieve._meta.get_fields()]
    requirements_fields.remove("achieverequirenmentstatus")
    requirements_fields.remove("requirenmenttogetachieve")
    requirements_fields.remove("id")
    requirements_fields.remove("pk")
    for achievement in achievements:
        requirements = achievement.requirenmenttogetachieve_set.all()
        for requirement in requirements:
            for field in requirements_fields:
                if getattr(requirement, field):
                    requirement_value = getattr(requirement, field)
                    users = UserProfile.objects.all()
                    for user in users:
                        user_value = ""
                        try:
                            user_value = getattr(user, field)
                        except Exception:
                            break
                        if requirement_value == user_value:
                            AchievementUserStatus.objects.create(
                                achievement=achievement,
                                user=user,
                            )
