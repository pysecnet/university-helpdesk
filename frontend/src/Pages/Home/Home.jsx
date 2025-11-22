import styles from "./Home.module.css";
// import { IoChatbubbleOutline } from "react-icons/io5";
// import { LuTicketCheck } from "react-icons/lu";
// import { RiChatSmileAiLine } from "react-icons/ri";
export default function Home() {
  return (
    <div className=" py-5 my-4 text-center border border-danger">
      {" "}
      <div className=" py-5 text-center border border-danger">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Get instant help with your academic <div>queries and studies</div>
        </h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          <p className="lead mb-4">
            Access AI-powered academic assistant and connect with university
            staff through our comprehensive support system designed for student
            success.
          </p>{" "}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>{" "}
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div
        className={`col-lg-6 mx-auto position-relative ${styles.boxContainer}`}
      >
        <div className={` ${styles.box}`}>
          <i className={`bi bi-chat-dots ${styles.icon}`}></i>
          <div className={`${styles.box1}`}>
            <h4>AI Assistant</h4>
            <p>Ready to help</p>
            <span
              className={`position-absolute top-0 start-100 translate-middle badge ${styles.badge}`}
            >
              <div className={`${styles.badge1}`}>
                <h4>24/7</h4>
                <p>available</p>
              </div>
              <span class="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
        <div className={`${styles.box2}`}>
          <p>"How do i caculate derivatives in calculus"</p>
          <p className={`${styles.highlight}`}>
            I'll help you understand derivatives step by step...
          </p>
        </div>
      </div>
      <div className=" py-5 text-center border border-primary">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Everything you need for academic success
        </h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          <p className="lead mb-4">
            Our comprehensive platform combines the AI technology with human
            expertise to provide instant and personalized support.
          </p>{" "}
        </div>{" "}
      </div>
      <div
        className={`row g-4 py-5 row-cols-1 row-cols-lg-4 ${styles.features}`}
      >
        {" "}
        <div className={`feature col ${styles.feature}`}>
          {" "}
          <div
            className={`feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3 ${styles.iconBox}`}
          >
            {" "}
            <i className={`bi bi-messenger ${styles.icon}`}></i>
          </div>{" "}
          <h3 className={`fs-2 text-body-emphasis my-3 ${styles.heading}`}>
            Instant AI Assistant
          </h3>{" "}
          <p className="my-3">
            Get immediate answers to academic questions with our advance AI
            chatbot trained our university curriculum.
          </p>{" "}
          <a href="#" className={`icon-link my-3 ${styles.iconLink}`}>
            Try AI chat
            <i className={`bi bi-arrow-right ${styles.linkicon}`}></i>{" "}
          </a>{" "}
        </div>{" "}
        <div className={`feature col ${styles.feature}`}>
          {" "}
          <div
            className={`feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3 ${styles.iconBox}`}
          >
            {" "}
            <i className={`bi bi-messenger ${styles.icon}`}></i>
          </div>{" "}
          <h3 className={`fs-2 text-body-emphasis my-3 ${styles.heading}`}>
            Instant AI Assistant
          </h3>{" "}
          <p className="my-3">
            Get immediate answers to academic questions with our advance AI
            chatbot trained our university curriculum.
          </p>{" "}
          <a href="#" className={`icon-link my-3 ${styles.iconLink}`}>
            Try AI chat
            <i className={`bi bi-arrow-right ${styles.linkicon}`}></i>{" "}
          </a>{" "}
        </div>{" "}
        <div className={`feature col ${styles.feature}`}>
          {" "}
          <div
            className={`feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3 ${styles.iconBox}`}
          >
            {" "}
            <i className={`bi bi-messenger ${styles.icon}`}></i>
          </div>{" "}
          <h3 className={`fs-2 text-body-emphasis my-3 ${styles.heading}`}>
            Instant AI Assistant
          </h3>{" "}
          <p className="my-3">
            Get immediate answers to academic questions with our advance AI
            chatbot trained our university curriculum.
          </p>{" "}
          <a href="#" className={`icon-link my-3 ${styles.iconLink}`}>
            Try AI chat
            <i className={`bi bi-arrow-right ${styles.linkicon}`}></i>{" "}
          </a>{" "}
        </div>{" "}
      </div>
      <div
        className={`row g-4 py-5 my-5 row-cols-1 row-cols-lg-4 ${styles.box3container}`}
      >
        <div className={`feature col ${styles.box3}`}>
          {" "}
          <h4 className="my-1">10K+</h4>{" "}
          <p className="my-1">Questions Answerd</p>{" "}
        </div>
        <div className={`feature col ${styles.box3}`}>
          {" "}
          <h4 className="my-1">500+</h4> <p className="my-1">Ticket Resolved</p>{" "}
        </div>
        <div className={`feature col ${styles.box3}`}>
          {" "}
          <h4 className="my-1">24/7</h4> <p className="my-1">AI Availablity</p>{" "}
        </div>
        <div className={`feature col ${styles.box3}`}>
          {" "}
          <h4 className="my-1">95%</h4>{" "}
          <p className="my-1">Satisfaction Rate</p>{" "}
        </div>
      </div>
      <div className=" py-5 text-center border border-primary">
        <h1 className="display-5 fw-bold text-body-emphasis">How it works</h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          <p className="lead mb-4">
            Getting help is simple and straightforward. Choose your preferred
            method and get the support you need.
          </p>{" "}
        </div>{" "}
      </div>
      <div class="row g-0 text-center my-3">
        <div class="col-sm-6 col-md-6">
          <h3>AI Assistant</h3>
          <ol className={`text-start my-5`}>
            <li>
              <h4>Ask Your Question</h4>
              <p>
                Type your academic question in natural language - no special
                formatting required.
              </p>
            </li>
            <li>
              <h4>Get Instant Response</h4>
              <p>
                Received detailed explanations, step-by-step solutions, and
                relevant example immediatly.
              </p>
            </li>
            <li>
              <h4>Continous Learning</h4>
              <p>
                Ask follow-up questions and dive deeper into topics with our
                conversational AI.
              </p>
            </li>
          </ol>
        </div>
        <div class="col-6 col-md-6">
          <h3>Staff Assistant</h3>
          <ol className={`text-start my-5`}>
            <li>
              <h4>Submit Request</h4>
              <p>
                Fill out a detailed form describing your issue and the type of
                assistance needed.
              </p>
            </li>
            <li>
              <h4>Get Assigned</h4>
              <p>
                Your Ticket is automatically routed to the appropraite
                department for quick resolution.
              </p>
            </li>
            <li>
              <h4>Receive Support</h4>
              <p>
                Get personalized assistance from qualified staff members and
                track progress.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div
        className={`py-5 text-center border border-primary conatiner-fluid ${styles.lastcontainer}`}
      >
        <h1 className={`display-5 fw-bold `}>
          Ready to get the help you need?
        </h1>{" "}
        <div className="col-lg-6 mx-auto">
          {" "}
          <p className="lead mb-4">
            Access AI-powered academic assistant and connect with university
            staff through our comprehensive support system designed for student
            success.
          </p>{" "}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button
              type="button"
              className={`btn btn-primary btn-lg px-4 gap-3 ${styles.btnPrimary}`}
            >
              Primary button
            </button>{" "}
            <button
              type="button"
              className={`btn btn-outline-secondary btn-lg px-4 ${styles.btnSecondary}`}
            >
              Secondary
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
