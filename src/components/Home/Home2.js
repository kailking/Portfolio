import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> 自我介绍 </span> MYSELF
            </h1>
            <p className="home-about-body">
              我们是一家中外合资的互联网公司，主营业务是能源监测系统、能源类咨询，为客户提供全面的综合能源软件服务 🤷‍♂️
              <br />
              <br />涵盖了
              <i>
                <b className="purple"> 监测、辅助管理、能源优化、节能减碳等 </b>
              </i>
              <br />
              <br />
              我们拥有一支技术过硬、经验丰富的团队 &nbsp;
              <i>
                <b className="purple">秉承“客户至上，合作共赢”的理念 </b> 致力
                于为客户提供优质的服务{" "}
                <b className="purple">
                助力客户实现数码化和智能化升级。
                </b>
              </i>
              <br />
              <br />
              如果您在寻找一个中外合资的综合能源软件服务公司，我们有信心能够给您提供符合您需求的解决方案。
               {/* <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; @
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>找到我们：广东省惠州市惠城区和畅五路西10号港澳青年创业基地906</h1>
            <p>
              请随时 <span className="purple">联系我们 </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="@"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="@"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="@"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="@"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
