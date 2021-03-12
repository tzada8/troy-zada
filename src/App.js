import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

// CARDS
import Home from "./components/cards/home/Home";
import Resume from "./components/cards/resume/Resume";
import Skills from "./components/cards/skills/Skills";
import Experience from "./components/cards/experience/Experience";
import Blog from "./components/cards/blog/Blog";
import Contact from "./components/cards/contact/Contact";

function App() {
   return (
      <div>
         <Router>
            <Navbar />
            <div className="content-container">
               <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/resume" exact component={Resume} />
                  <Route path="/skills" exact component={Skills} />
                  <Route path="/experience" exact component={Experience} />
                  <Route path="/blog" exact component={Blog} />
                  <Route path="/contact" exact component={Contact} />
               </Switch>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum ratione incidunt facilis hic, placeat laboriosam
                  suscipit, aperiam dolore error iure asperiores consectetur
                  reprehenderit est vel magnam quisquam sit nesciunt at minus.
                  Consectetur quibusdam blanditiis maiores eligendi dicta, illo
                  beatae natus repudiandae dolore! Veniam saepe, iste fugiat
                  placeat distinctio nostrum velit, assumenda, recusandae
                  exercitationem ullam laborum temporibus incidunt eveniet eum
                  in atque. Repellat laboriosam placeat ex deserunt sunt at ipsa
                  optio, alias esse? Totam beatae pariatur magni ad molestiae
                  neque iure, eaque aut rem labore eius dolore rerum id cum
                  alias eveniet quas! Totam atque, deleniti pariatur vero
                  voluptate laudantium, voluptates ab quidem cumque vel itaque
                  asperiores optio dolorem incidunt nulla impedit corporis
                  possimus, quae sed eveniet eos beatae facilis. Unde, minima
                  architecto laborum et possimus culpa consequatur nulla placeat
                  quasi ratione numquam incidunt deleniti voluptatem error
                  officia saepe, voluptas asperiores voluptatibus, omnis
                  voluptate nemo necessitatibus. Sint consequuntur culpa iusto
                  distinctio corrupti consequatur hic voluptatem dolores. Ullam
                  maiores tenetur adipisci possimus praesentium quisquam
                  inventore voluptatum autem illum labore. Laborum impedit
                  possimus itaque? Quis expedita debitis reiciendis incidunt
                  odio. Rem corrupti asperiores est! Obcaecati quo id, pariatur
                  possimus maxime, non optio itaque fugit quidem sed praesentium
                  minima placeat! Accusantium explicabo minus nisi nesciunt
                  modi! Quia autem animi perspiciatis dignissimos aut nulla
                  voluptatum eius eaque blanditiis repellendus, harum velit
                  dolores fugit quod quae expedita. Eaque aliquam quos ducimus
                  ipsum illum incidunt adipisci, a culpa, harum at fugiat,
                  excepturi laborum assumenda reiciendis. Rem quia, reiciendis
                  animi, pariatur ut itaque cupiditate quasi eaque fugit nulla
                  rerum odit eos debitis. Esse exercitationem molestiae voluptas
                  inventore omnis aperiam modi maiores iste laudantium error in,
                  quia explicabo nemo cum voluptatibus quasi reiciendis.
                  Expedita, aliquid voluptatum, neque a hic iusto pariatur quasi
                  fuga esse accusamus minima nemo rerum animi aspernatur ducimus
                  ipsam dicta tempora obcaecati laborum nihil praesentium optio?
                  Ut quo molestias id tenetur fuga asperiores animi dicta
                  excepturi consequatur qui officia doloremque, labore
                  perspiciatis placeat unde dolorem maiores suscipit cumque
                  explicabo distinctio magnam nemo quae voluptas? Fugit
                  laboriosam quam earum reprehenderit molestiae voluptate, quo
                  nulla libero temporibus accusamus suscipit quidem sunt
                  deleniti distinctio tenetur modi officiis commodi id ea ipsa
                  ad. Suscipit, explicabo incidunt? Tenetur quisquam eligendi
                  non quo necessitatibus nobis dolores itaque ea maxime
                  recusandae magni sunt, numquam, perspiciatis quos minima sed
                  veritatis excepturi temporibus minus veniam deserunt tempora
                  eius blanditiis ut. Ex, maxime harum maiores expedita nisi
                  voluptatibus facilis, assumenda qui earum sed, nihil dicta
                  corrupti aut dignissimos quam ut itaque natus. Fugit quisquam
                  illo debitis, atque excepturi temporibus voluptatum sunt
                  reiciendis dolore voluptas quaerat reprehenderit magnam iure!
                  Iusto dolore corporis esse voluptatibus? Doloremque natus, in
                  autem corporis quasi vero similique unde, deserunt modi atque
                  esse vel quibusdam itaque beatae eveniet repudiandae illo.
                  Omnis expedita atque saepe ullam quis dolor dolore ex itaque
                  tempore libero cumque, nemo voluptas, quod minus sunt. Laborum
                  ipsa asperiores porro quasi animi tenetur voluptas officiis
                  consequuntur incidunt veritatis fuga tempora nemo,
                  perspiciatis aperiam officia non tempore obcaecati itaque,
                  excepturi eos natus sunt doloribus. Sapiente fuga sunt itaque
                  nobis, nostrum rem architecto veniam excepturi alias voluptas,
                  nam at earum reiciendis eveniet! Ipsam quam voluptatum ullam
                  fugiat architecto nobis a odit id excepturi nam sunt labore
                  sapiente dolore ab corrupti magni vero error tempora delectus
                  deleniti, quis voluptatibus corporis iure! Aut magnam, iure
                  mollitia quasi possimus corrupti accusamus qui veniam. Sint,
                  dolores quas praesentium dignissimos ex similique aspernatur
                  fugiat consequatur porro et, iusto optio accusamus provident
                  dolorem unde laudantium rerum magnam dicta perferendis,
                  delectus hic minima ab excepturi dolor! Praesentium, itaque
                  recusandae officia voluptatem quisquam saepe dolor magni
                  accusamus, officiis repellat fugiat odio consequuntur
                  necessitatibus repellendus maiores veniam nisi eius eligendi
                  perferendis eaque, provident perspiciatis. Ullam, quas esse
                  neque pariatur dolor delectus illum minus quidem, ad optio
                  dolore odit ex adipisci modi vero iusto error! Architecto enim
                  non sint veniam esse eius nemo veritatis explicabo
                  exercitationem, mollitia nihil qui incidunt, harum, nam quis
                  illo error consequuntur consectetur vel cupiditate magni
                  impedit quos. Dolores atque obcaecati earum excepturi nostrum
                  ut itaque ea. Ipsum, laudantium. Doloremque voluptatem
                  corporis necessitatibus. Possimus, unde quo. Est voluptatem
                  assumenda quam deleniti cum unde, quaerat, dolorem repudiandae
                  fugiat aliquam corrupti a asperiores reiciendis! Incidunt sunt
                  odio aperiam voluptatibus vel veniam vitae eaque iure totam
                  quia. Molestiae enim nemo sunt eius, dolor repellat deleniti
                  quis cum corporis accusamus perferendis ex placeat saepe culpa
                  optio, tenetur harum! Delectus aut eaque explicabo ipsam
                  asperiores aperiam quasi necessitatibus laboriosam veniam
                  excepturi, recusandae cum esse error at quas obcaecati dolorem
                  illo odio modi eum iste voluptates impedit. Commodi
                  consectetur animi blanditiis ea ex tenetur, rem alias amet,
                  molestiae quisquam iusto eveniet doloremque pariatur eos
                  voluptatibus numquam. Incidunt explicabo minima commodi
                  excepturi ut eligendi perspiciatis facere tenetur in eos
                  placeat eaque cumque, delectus pariatur quod est sequi quae.
                  Minus beatae unde, dolore quos nam saepe assumenda sunt
                  ducimus cumque. Possimus in inventore nesciunt modi quidem?
                  Nesciunt, aspernatur, repellendus optio quos minima explicabo
                  pariatur autem id necessitatibus consectetur possimus aut
                  quisquam reiciendis veritatis quas repellat quam numquam alias
                  eum. Officiis debitis explicabo facere a, accusamus
                  repellendus tempora voluptatem atque exercitationem vero,
                  aspernatur ad odit beatae eaque! Maiores incidunt ipsum
                  temporibus totam sit voluptas optio delectus veritatis!
                  Repudiandae exercitationem accusamus et accusantium
                  perferendis nihil, sequi incidunt distinctio corporis
                  blanditiis cumque possimus maiores libero voluptate, ex amet
                  non aspernatur nobis! Aperiam maxime, ducimus nulla, ad quos
                  nobis vitae, veniam voluptatum harum esse porro reiciendis
                  alias at laborum. Tenetur reiciendis modi dignissimos beatae
                  dolorem veritatis temporibus maiores adipisci tempore,
                  consequuntur qui blanditiis eveniet autem, cupiditate
                  architecto incidunt inventore. Non sequi excepturi quae.
                  Eligendi obcaecati, laboriosam perferendis perspiciatis illo
                  natus! Quaerat consequuntur magnam hic accusamus. Architecto,
                  suscipit quo? Odit repellendus quae autem? Maiores minima esse
                  sapiente dolorem animi placeat illum alias consequuntur rem
                  cum voluptate ex aut neque itaque corporis aspernatur omnis,
                  dolore sequi harum. Dignissimos dolore tempore, accusantium
                  laboriosam cumque, nihil error autem delectus dolorem soluta
                  amet voluptatem aliquam molestiae necessitatibus eaque nemo.
                  Odit, error. Quibusdam quam sit quidem deleniti dolores cum id
                  atque perspiciatis vero sapiente ut iusto, reiciendis
                  cupiditate iste consequatur velit fuga voluptates aspernatur
                  totam magnam temporibus.
               </p>
            </div>
         </Router>
      </div>
   );
}

export default App;
