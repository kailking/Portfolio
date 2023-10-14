import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          @ <strong className="purple">合作案例 </strong>
        </h1>
        <p style={{ color: "white" }}>
        这是我们最近从事的一些项目。
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="智慧能源系统"
              description="智慧能源系统是一种通过互联网技术对建筑物、设备、机器等能耗设备进行实时在线监测的平台。该平台可以帮助用户实现对能耗的实时监控、分析、预测和优化，从而降低能耗、提高能源利用效率、节约能源成本。"
              // ghLink="@"
              // demoLink="@"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="区块链数字版权系统"
              description="区块链存证是指利用区块链技术对数据进行时间戳和验证的过程。通过将数据的哈希值存储在区块链上，可以确保数据的完整性和不可篡改性。区块链存证可以应用于多个领域，如知识产权保护、合同管理、溯源追踪等。"
              // ghLink="@"
              // demoLink="@"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="用于构建 README 文件的在线 Markdown 编辑器，支持 GFM、带有工具栏的自定义 Html 标签和即时预览。这两种编辑器都支持使用本地存储自动保存工作"
              // ghLink="@"
              // demoLink="@"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI人工智能"
              description="一个AI语言模型，利用自然语言处理技术进行对话的人工智能程序。我的设计目的是模拟人类的思维和交流方式，从而能够理解和回答语言表达的问题和意图。"
              ghLink="https://upliftingmi.com/"
              demoLink="https://upliftingmi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="语言处理模型"
              description="使用“自然语言处理”来检测网络空间中与自残相关的帖子和用户的自杀意图，从而帮助预防自杀。"
              // ghLink="@"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="人工智能识别"
              description="智能脸部识别是一种利用人工智能技术对人脸进行识别和分析的技术。它可以通过摄像头或者图像输入，自动检测和识别人脸，并提取出人脸的特征信息。智能脸部识别技术可以应用于多个领域，如安全监控、人脸解锁、人脸支付等。"
              // ghLink="@"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
