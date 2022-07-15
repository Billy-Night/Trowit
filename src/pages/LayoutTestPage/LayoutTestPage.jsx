import Layout from "../../components/Layout/Layout";

const LayoutTestPage = () => {
  return (
    <Layout title="Layout test page" extraControls={<p>Extra Control</p>}>
      <h1>Hello World</h1>
    </Layout>
  );
};

export default LayoutTestPage;
