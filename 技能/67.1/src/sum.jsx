import React from 'react'
export default class Sum extends React.Component{
    constructor(){
        super()
    }
    state={
        list:`
        [00:02.500]山丹丹开花红艳艳
        [00:08.760]
        [01:05.040]一道道的（那个）山来（呦）
        [01:11.140]一道道水
        [01:13.620]咱们中央噢红军到陕北
        [01:22.500]咱们中央噢红军到陕北
        [01:30.590]一杆杆的那个红旗哟一杆杆枪
        [01:40.980]咱们的队伍势力壮
        [01:51.990]
        [02:01.850]千家万户（齐）哎咳哎咳呦
        [02:05.120]把门开（齐）哎咳哎咳呦
        [02:08.420]快把咱亲人迎进来
        [02:11.730]咿儿呀儿来吧呦
        [02:15.100]热腾腾儿的油糕（齐）
        [02:16.720]哎咳哎咳呦
        [02:18.370]摆上桌（齐）哎咳哎咳呦
        [02:21.720]滚滚的米酒捧给亲人喝
        [02:25.010]咿儿呀儿来吧呦
        [02:28.340]
        [02:35.500]满天的乌云（哎咳哎咳呦）
        [02:39.930]风吹散（哎咳哎咳呦）
        [02:43.100]毛主席来了晴了天
        [02:46.420]晴呀嘛晴了天
        [02:49.790]毛主席来了晴了天
        [02:53.050]晴呀嘛晴了天
        [03:02.450]
        [03:03.240]山丹丹（的那个）开花（呦）
        [03:09.410]红艳艳
        [03:13.440]毛主席领导咱打江山
        [03:23.890]毛主席领导咱打江山
        [03:47.920]`,
        lyric:[],
        time:[]
    }
    componentDidMount(){
        let lyric=[];
        let time=[];
        let list=this.state.list.split('/n')[0].split('[');
        list.forEach(item=>{
            if(item.trim().split(']')[0]&&item.trim().split(']')[1]){
                time.push(item.trim().split(']')[0])
                lyric.push(item.trim().split(']')[1])
            }
        })
        this.setState({
            lyric:lyric,
            time:time
        },()=>{
            let mySwiper=new window.Swiper('.swiper-container',{
                autoplay:100
            })
        }) 
    }
    render(){
        return <div className='swiper-container'>
                    <div className="swiper-wrapper">
                        {
                        this.state.lyric.map((item,index)=>{
                            return <div className="swiper-slide" key={index}>
                                        {item}
                                   </div>
                        })
                        }
                    </div>
         
                </div>
    }
}