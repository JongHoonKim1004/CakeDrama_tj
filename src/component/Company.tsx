import React from 'react';

const Company = () => {
  return (
    <div>
      <div className='container' style={{margin: "20px auto", textAlign: "center", borderBottom: "1px solid #d8d8d8"}}>
        <div className='row underNav'>
          <img alt='' src='img/Fresh_Hand_Making.png' style={{width: "400px", height:"50px", margin:" 75px auto"}}/>
        </div>
        <div className='row' style={{fontSize: "25px", fontWeight: "700", margin:"30px"}}>
          <h3>회사소개</h3>
        </div>
        <div className='row' style={{fontSize: "25px", fontWeight: "650", color: "#981b1e", lineHeight: "40px"}}>
          <p>국내 디저트케익의 선두 기업</p>
          <br></br>
        </div>
        <div className='row' style={{fontSize: "20px", lineHeight: "40px"}}>
          <p>A Romantic Taste Since 2000</p>
        </div>
        <div className='row' style={{lineHeight: "24px",}}>
          <p>프리미엄급 원재료와 최고의 기술력, 모던한 디자인의 World Class 제품을 보다 많은 고객들께</p>
          <p>서비스하여 한정적으로 소비되어 지던 트렌드화된 하나의 Promotion Food인 케익을 새로운 "식문화"의 개념으로</p>
          <p>승화시켜 대한민국 디저트문화의 대표 아이템으로 선도해 나가고 있습니다.</p>
        </div>
        <div className='row' style={{margin: "50px auto", width: "1000px", height: "320px"}}>
          
            <div className='col-md-4'>
            <img alt='' src='https://jonghoonkim1004.github.io/FirstReactData/img/Company/company-mark01.png' style={{width: "320px", height: "320px"}}/>
            </div>
            <div className='col-md-4'>
            <img alt='' src='https://jonghoonkim1004.github.io/FirstReactData/img/Company/company-mark02.png' style={{width: "320px", height: "320px"}}/>
            </div>
            <div className='col-md-4'>
            <img alt='' src='https://jonghoonkim1004.github.io/FirstReactData/img/Company/company-mark03.png' style={{width: "320px", height: "320px"}}/>
            </div>
          
        </div>
      </div>
      <div className='container'>
        <div className='row' style={{height: "150px", paddingTop: "50px"}}>
          <img alt='' src='img/Company/business_strategy.jpg' style={{height:"50px", width:"400px", margin: "0 auto"}}/>
        </div>
        <div className='row'>
          <div className='col-md-2' style={{height: "240px", paddingBottom: "50px"}}>
            <img alt='' src='https://jonghoonkim1004.github.io/FirstReactData/img/Company/company_BS1.jpg' style={{width: "100%", height: "100%", border: "1px solid #999"}} />
          </div>
          <div className='col-md-10' style={{paddingLeft: "30px", lineHeight: "20px"}}>
            <p>고객을 먼저 생각하며 고객과의 신뢰와 서비스를 지향하는 마음으로 고객 감동과 만족을 실현시켜 나갈 것입니다.</p>
            <p>고객을 기업 생존의 근간으로 인식하고, 고객요구에 부응한 차별화된 가치 제공으로 최고의 고객 만족을 이끌어 내고 있습니다.</p>
            <br/>
            <br/>
            <ul style={{listStyle: "disc", marginLeft: "20px"}}>
              <li>고객의 입장에서 생각하고 일한다.</li>
              <li>고객의 뜻을 모든 의사결정의 기준으로 삼는다.</li>
              <li>고객이 제기한 이슈에 대해 창조적인 해결책을 찾기 위해 노력한다.</li>
              <li>고객 요구에 신속하게 대응할 수 있는 역량을 갖춘다.</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2' style={{height: "240px", paddingBottom: "50px"}}>
            <img alt='' src='https://jonghoonkim1004.github.io/FirstReactData/img/Company/company_BS2.jpg' style={{width: "100%", height: "100%", border: "1px solid #999"}} />
          </div>
          <div className='col-md-10' style={{paddingLeft: "30px", lineHeight: "20px"}}>
            <p>생산적인 문제 의식과 끊임 없는 혁신 활동으로 제품과 서비스의 경쟁력을 확보하여 시장을 선도 합니다.</p>
            <br/>
            <br/>
            <ul style={{listStyle: "disc", marginLeft: "20px"}}>
              <li>관행에 매이지 않고 새로운 방식을 추구한다.</li>
              <li>창의적인 생각과 아이디어를 수용하고 장려한다.</li>
              <li>고객의 요구에 앞서 내가 남보다 먼저 변화한다.</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2' style={{height: "240px", paddingBottom: "50px"}}>
            <img alt='' src='https://jonghoonkim1004.github.io/FirstReactData/img/Company/company_BS3.jpg' style={{width: "100%", height: "100%", border: "1px solid #999"}} />
          </div>
          <div className='col-md-10' style={{paddingLeft: "30px", lineHeight: "20px"}}>
            <p>고객의 기호와 품격에 맞는 맞춤형 케익을 디자인, 생산하여 전국 주요 도시 어디에서나 최상의 품질을 맛보실 수 있습니다.</p>
            <br/>
            <br/>
            <ul style={{listStyle: "disc", marginLeft: "20px"}}>
              <li>최고의 품질을 위한 원스톱 배송.</li>
              <li>프리미엄급 원재료와 최고의 기술력으로 고객의 기호와 품격에 맞는 제품 개발.</li>
              <li>철저한 위생관리에 맞는 최적의 생산환경.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Company;