const ScheduleDefaultList = [{
    id: 1,
    name: '式神寄养',
    desc: '自动续式神寄养，建议把执行时间提前5分钟，启动前需要退出游戏',
    checked: false,
    lastRunTime: '',
    job: undefined,
    config: {
      scheme: '定时任务-启动游戏-式神寄养',
      cron: '0 0 0,6,12,18 * * *',
    }
  },
  {
    id: 2,
    name: '寮活动',
    desc: '自动参加寮活动，目前只支持道馆、狩猎',
    checked: false,
    lastRunTime: '',
    job: undefined,
    config: {
      scheme: '定时任务-启动游戏-每日寮活动',
      cron: '0 0 19 * * *',
    }
  }
];

export default ScheduleDefaultList;