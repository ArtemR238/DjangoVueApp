from api.models import Competition
import datetime

def end_competition():
    print(1)
    competitions = Competition.objects.filter(isCompleted=False)
    for competition in competitions:
        now = datetime.datetime.now()
        # deadline = competition.deadline + datetime.timedelta(days=1)
        deadline = competition.deadline
        if now.strftime("%Y-%m-%d") == deadline.strftime("%Y-%m-%d"):
            competition.isCompleted = True
            competition.save()


