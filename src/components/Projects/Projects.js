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
              ghLink="@"
              demoLink="@"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="个人博客"
              description="个人博客页面使用 Next.js 和 Tailwind Css 构建，它从 makdown 文件中获取内容并使用 Next.js 呈现它。支持深色模式，使用markdown轻松写博客。"
              ghLink="@"
              demoLink="@"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="用于构建 README 文件的在线 Markdown 编辑器，支持 GFM、带有工具栏的自定义 Html 标签和即时预览。这两种编辑器都支持使用本地存储自动保存工作"
              ghLink="@"
              demoLink="@"              
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
              title="项目A"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="@"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="项目B"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="@"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
