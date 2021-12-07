import os
from celery import Celery
from celery.schedules import crontab


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')


app = Celery('core')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

import django
django.setup()
from .service import end_competition

@app.task
def close_competition():
    print(1)


app.conf.beat_schedule = {
    'end-every-hour': {
        'task': 'core.celery.close_competition',
        'schedule': crontab()
        # 'schedule': crontab(minute=0, hour=0)
    }
}
