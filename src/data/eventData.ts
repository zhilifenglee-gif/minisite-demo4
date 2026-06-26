import { EventData } from "../types";

export const eventData: EventData = {
  title: "华为数据存储新春发布会",
  theme: "数据觉醒，存力跃迁",
  slogan: "数据觉醒",
  date: "2026年6月27日",
  location: "中国 · 深圳",
  navItems: [
    { label: "发布会介绍", href: "#hero" },
    { label: "发布会精彩", href: "#video" },
    { label: "会议议程", href: "#agenda" },
    { label: "重磅嘉宾", href: "#speakers" },
    { label: "展会信息", href: "#venue" },
    { label: "往届回顾", href: "#past-review" },
  ],
  agenda: [
    {
      id: "agenda-1",
      time: "14:00 - 14:30",
      title: "签到与开场",
      subtitle: "来宾签到，多媒体沉浸式存力光影秀",
      description: "体验下一代智能数据存储科技的开场演绎，华为新春签到仪式。"
    },
    {
      id: "agenda-2",
      time: "14:30 - 15:10",
      title: "主题演讲：数据觉醒，存力跃迁",
      subtitle: "开启AI时代数据生命周期新征程",
      description: "解读全球数字化浪潮，深入剖析企业数据在AI大模型时代的二次觉醒与存力跃迁战略。"
    },
    {
      id: "agenda-3",
      time: "15:10 - 15:50",
      title: "新品发布：华为AI数据平台与FusionCube A1000",
      subtitle: "定义智能时代超融合存储新高度",
      description: "重磅揭晓专为AI训练与推理设计的超高速AI存储底座，以及新一代FusionCube A1000超融合新品性能指标。"
    },
    {
      id: "agenda-4",
      time: "15:50 - 16:30",
      title: "圆桌论坛：AI时代数据基础设施的机遇与挑战",
      subtitle: "学界与产业界领袖共话数据未来",
      description: "邀请院士、顶尖科技巨头、资深分析师，就生成式AI技术带来的吞吐、高能效、数据安全瓶颈展开深度交锋。"
    },
    {
      id: "agenda-5",
      time: "16:30 - 17:00",
      title: "媒体问答与交流",
      subtitle: "深度解答行业关切与华为技术蓝图",
      description: "华为主创团队与现场100+家主流科技与财经媒体进行Q&A互动，探讨技术演进路线。"
    }
  ],
  speakers: [
    {
      id: "speaker-1",
      name: "何海林",
      title: "华为数据存储产品线总裁",
      company: "华为技术有限公司",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
      description: "全面负责华为数据存储产品线的战略规划、技术研发及全球商业拓展，拥有20余年ICT行业深厚积淀。"
    },
    {
      id: "speaker-2",
      name: "赵金生 博士",
      title: "华为闪存存储领域首席科学家",
      company: "华为数据存储研究部",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
      description: "专精于下一代非易失性介质、高密度闪存控制算法与近存计算领域，多次获得国家级科技进步奖。"
    },
    {
      id: "speaker-3",
      name: "王中平",
      title: "大数据与人工智能专家",
      company: "中国信息通信研究院",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300",
      description: "长期从事国家数据基础设施标准制定、数字经济及AI算力存力评估指标体系的研究工作。"
    },
    {
      id: "speaker-4",
      name: "张文峰",
      title: "华为存储解决方案首席架构师",
      company: "华为技术有限公司",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
      description: "主导设计了数十个全球顶级金融、电信运营商及智算中心的大规模全闪存和数据湖演进方案。"
    }
  ],
  venue: {
    name: "深圳国际会展中心",
    address: "深圳市宝安区福海街道展城路1号",
    tags: ["10万平米展区", "前沿科技体验", "沉浸式互动"],
    highlights: [
      "20,000+ 平米超算与全闪存真机展台，零距离接触百万级IOPS机柜",
      "高能效绿色节能液冷展示区，了解PUE低至1.1的绿色未来存储技术",
      "AI智算体验中心，现场部署大模型推理实测，秒级生成对比分析"
    ]
  },
  pastReviews: [
    {
      id: "review-1",
      title: "华为数据存储全球峰会盛况",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      category: "领袖演讲"
    },
    {
      id: "review-2",
      title: "Dorado高端闪存极速实测现场",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      category: "新品解密"
    },
    {
      id: "review-3",
      title: "展区客户深入交流解决方案",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
      category: "行业交流"
    },
    {
      id: "review-4",
      title: "千人会场共话存力生态繁荣",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      category: "合作签约"
    }
  ],
  stats: [
    { value: "26,000+", label: "服务全球客户" },
    { value: "150+", label: "覆盖国家和地区" },
    { value: "No.1", label: "全球全闪存市场份额" },
    { value: "300%", label: "AI模型加载效率提升" }
  ],
  interestedProducts: [
    "OceanStor Dorado 全闪存存储",
    "OceanStor Pacific 分布式存储",
    "AI数据平台 (AI Data Lake)",
    "FusionCube A1000 超融合基础设施",
    "其他存储与数据解决方案"
  ]
};

// Expose to window object for convenient debugging, direct browser inspection and brand switching as requested!
if (typeof window !== "undefined") {
  (window as any).eventData = eventData;
}
