import Layout from "@components/Layout";

export default function Contact() {
  return (
    <Layout id="contact" title={"Contact"}>
      <div>
        <img alt="profile image"></img>
        <ul>
          <li>
            <img />
            <div>Seoul, South Korea</div>
          </li>
          <li>
            <img />
            <a href="mailto:tosk3927@gmail.com">tosk3927@gmail.com</a>
          </li>
          <li>
            <img />
            <a href="tel:010-7731-6767">010-7731-6767</a>
          </li>
        </ul>
        <div>
          <div>Git</div>
          <div>Blog</div>
          <div>LinkedIn</div>
        </div>
      </div>
    </Layout>
  );
}
