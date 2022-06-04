import { Footer } from "../../widgets/Footer";
import { Header } from "../../widgets/Header";

export const BaseLayout = (props) => {
  const { headerProps, footerProps, children } = props;
  return (
    <div>
        <Header {...headerProps} />
        <main> {children} </main>
        <Footer {...footerProps} />
    </div>
  );
};