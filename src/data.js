// 侧边栏数据
const introduce = [
    {name:"自我介绍",key:'1-1',type:"ios-navigate",path:"introduce"},
    {name:"专业技能",key:'1-2',type:"ios-search",path:"skills",children:[{
        name:'HTMl',key:'1-2-1',path:'skills/html',
    },{
        name:"JS",key:'1-2-2',path:'skills/js'
    }]},
    {name:"兴趣爱好",key:'1-3',type:"ios-search",path:"hobies"},    
    {name:"职业规划",key:'1-4',type:"ios-settings",path:"working"}
]
export default introduce

