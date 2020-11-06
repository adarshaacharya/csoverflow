import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React from 'react';

const Home = () => {
  useScrollToTop();
  
  return (
    <>
      <Sidebar />
      <div className="home">
        <h1>Home Page</h1>
        <p>
        te consectetur, repellendus quasi iure earum labore, quia illo temporibus dolores vel.
          Quod quisquam, quo numquam vero ipsam nulla ea illum sed ratione sapiente laboriosam aut, fuga est animi illo
          nesciunt odio, voluptatum minus neque. Vitae eum aliquam sapiente ea voluptates aliquid illo illum
          necessitatibus ipsa in quasi non a natus id obcaecati eos, sed repellendus accusantium enim! Eveniet modi
          beatae sint omnis temporibus culpa, architecto voluptates obcaecati ducimus excepturi, facere suscipit dolore
          quia laboriosam quasi, non et mollitia? Inventore molestias eius labore tenetur sint. Itaque odit molestiae
          voluptates sed recusandae ratione repellendus nihil laborum quas ut consequuntur facilis mollitia ullam
          praesentium, nostrum rerum veritatis ex. Nemo blanditiis asperiores veritatis culpa nihil placeat dolorem
          fugiat non excepturi similique repudiandae necessitatibus tenetur eius delectus, sed doloribus modi cumque,
          aspernatur voluptate nostrum enim. Dolorem nulla nam hic aspernatur voluptates, tenetur quisquam natus ad?
          Tempore, accusamus ea consectetur amet vel recusandae soluta vitae quo voluptatibus aut! Ut beatae unde
          cumque, aliquam voluptatibus ullam natus possimus! Accusamus asperiores laudantium, ipsam dolor recusandae vel
          tenetur rem libero delectus
        </p>
      </div>
    </>
  );
};

export default Home;
