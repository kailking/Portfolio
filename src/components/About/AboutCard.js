import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            HI. 我们是 <span className="purple">广东青岚智能科技有限公司 </span>
            主营业务是 <span className="purple"> 能源监测系统、能源类咨询。</span>
            <br />我们拥有丰富的的技术经验和行业背景，为客户提供全面的综合能源软件服务，涵盖了监测、辅助管理、能源优化、节能减碳等方面的解决方案。
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 为了更好的提供服务，我们与国内外多个知名公司建立了合作伙伴关系，在技术开发、市场营销、客户服务等方面进行深度合作，形成了全方位服务的优势。我们的产品不仅在国内得到了广泛认可，同时逐步打入海外市场，得到了国外客户的高度评价。
            </li>
            <li className="about-activity">
              <ImPointRight /> 我们拥有一支技术过硬、经验丰富的团队，致力于为客户提供优质的服务。我们专注于为客户提供全面的解决方案，在能源监测、管理、节能等方面为客户提供全面的支持和服务，助力客户实现数码化和智能化升级。
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Travelling
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            如果您在寻找一个综合能源软件服务公司，我们有信心能够给您提供符合您需求的解决方案。{" "}
          </p>
          <footer className="blockquote-footer">我们期待着与您的合作，共同努力，为新能源的发展做出贡献！</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
