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
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/resume" exact component={Resume} />
               <Route path="/skills" exact component={Skills} />
               <Route path="/experience" exact component={Experience} />
               <Route path="/blog" exact component={Blog} />
               <Route path="/contact" exact component={Contact} />
            </Switch>
         </Router>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            harum! Ab quo consequuntur vero explicabo, et consectetur, quasi
            debitis maxime voluptatibus minus, est velit earum assumenda ipsa
            recusandae esse eius enim reprehenderit neque molestiae veritatis
            perferendis rerum maiores! Eum qui modi velit dolores dolore, ipsum,
            cupiditate repellendus iste eligendi odit assumenda ipsa voluptate
            tempore? Expedita maxime ratione consectetur aliquid ducimus nemo
            voluptas! Harum doloribus quam aliquid sed impedit quibusdam.
            Dignissimos in accusamus rerum eveniet, eligendi, sint voluptates
            cupiditate minus ipsa hic ab, sed ipsum eos minima nemo similique?
            Esse quisquam quibusdam, eum quidem accusamus totam eaque adipisci
            illum earum, consectetur nostrum delectus laborum repellat ut
            explicabo molestias facilis perferendis nam reiciendis quod officia
            ullam amet hic optio! Explicabo sit voluptas nulla vitae
            perferendis, odit minus facilis quaerat impedit incidunt recusandae
            ipsum voluptatem, modi, nostrum nihil laudantium reiciendis suscipit
            cumque expedita placeat velit corporis? Eligendi omnis, minima in ea
            vel commodi, quibusdam deleniti, inventore sed aliquid beatae labore
            impedit quidem porro eaque at mollitia non similique laboriosam
            vitae voluptates. Veniam sunt laudantium ducimus dolor dolorem
            cumque id sint. Ad, maiores! Explicabo, libero atque aspernatur
            nostrum animi labore consequatur voluptates dolore perspiciatis
            accusantium nulla temporibus fuga ab sapiente, magnam, sed
            voluptatibus minima quis numquam enim iste. Aspernatur accusamus
            laborum nam sit quidem voluptatem exercitationem amet itaque saepe
            doloremque. Veniam omnis minus sunt totam ex nihil voluptatem,
            quaerat, consectetur, nostrum nesciunt error veritatis vero harum
            illo architecto deserunt sequi inventore debitis dolores? Provident
            quas molestiae, maiores fuga commodi, tempora sit vitae quos
            nesciunt nihil tenetur. Ipsam, dicta nemo nostrum praesentium, ab
            optio amet deleniti tempore id voluptatem quos dolore distinctio,
            reiciendis doloremque? Tempora, numquam? Reprehenderit repellendus
            reiciendis optio voluptatibus magni nulla delectus fuga expedita
            natus voluptate, praesentium, doloremque aliquid sequi placeat
            beatae quaerat blanditiis nam autem eius quod. Dicta nesciunt, eos
            repellat exercitationem tenetur beatae error reiciendis tempora
            quasi voluptatibus cumque possimus debitis similique mollitia
            quisquam sunt consequuntur maxime quo delectus! Cupiditate nemo modi
            voluptates autem magni accusantium. Accusantium laboriosam sint ut
            totam alias, voluptate ad dolores quo expedita nostrum tempore iste
            quaerat doloremque similique itaque saepe ex sed dolore consequatur
            molestiae vel numquam voluptas. Neque ipsam tempore quaerat rerum
            deleniti dicta quis nihil saepe aspernatur aperiam, voluptatibus,
            tempora eius ipsum omnis eos laborum. Ab perferendis quidem,
            distinctio officiis, doloremque consequatur deserunt tempore numquam
            maxime iure accusamus a. Quisquam animi hic commodi quas officia
            illo deleniti nam fugit tenetur recusandae. Minus, cum odio qui quae
            ad ab rerum aspernatur ut facilis iusto soluta alias quia quas
            repudiandae deserunt quaerat dolore debitis! Commodi accusantium
            dolorum veritatis in debitis repudiandae dolores ut cum tenetur
            maiores temporibus quae distinctio quis, enim similique magnam ea
            praesentium voluptatem facere delectus dignissimos labore deleniti!
            Facilis vero dicta illum sunt deserunt. Aliquam optio harum dolore
            cupiditate nulla eveniet ex voluptates necessitatibus! Laudantium
            consectetur, dolorum, adipisci earum sunt corrupti ab error
            molestiae autem, ea at fugit impedit sapiente voluptatibus harum et
            iure voluptatum! Fugiat error et magni amet similique quasi
            explicabo provident quae quisquam cumque voluptates nesciunt
            recusandae ea ad dicta officia dolorem ipsum harum enim quos
            assumenda, omnis commodi blanditiis. Consectetur doloremque nihil
            molestias officiis alias laborum cum earum natus! Cupiditate illum
            beatae accusantium voluptatum necessitatibus hic in ipsam unde, fuga
            officiis, eum cum quas! Est, unde totam? Ea accusantium possimus vel
            magni ipsam. Quia quas nihil optio pariatur necessitatibus impedit
            voluptatem dolorum, deleniti debitis porro veniam quidem fugit alias
            dignissimos? At sapiente tenetur quidem quas corrupti, vitae ex
            excepturi maiores aut officiis fuga beatae delectus perferendis cum
            quasi ullam libero blanditiis provident in distinctio recusandae
            aliquam. Quis maiores, natus nihil quos quidem voluptas similique
            saepe commodi nam expedita dolorem omnis voluptates inventore ex
            quam? Ea illo provident molestias magnam deserunt sequi facilis aut
            vero numquam repellat, tempore est nulla similique earum enim,
            expedita maxime a sed qui! Obcaecati fugit debitis possimus magni
            sed similique ipsum id pariatur quisquam enim corporis minus
            dolorem, sint maxime! Eum animi deleniti repellat voluptatum
            explicabo harum optio sunt nulla aliquam nemo modi quo, expedita
            earum accusantium fugiat doloremque. Pariatur culpa neque quod
            consequuntur sunt eveniet nam modi deserunt illo laboriosam?
            Architecto, accusamus nostrum quos vero similique quia expedita
            dolorum cum. Architecto at dolorum maxime veritatis dignissimos
            vitae error pariatur ullam, amet quasi recusandae voluptatum
            nostrum. Molestiae expedita veritatis fugit, incidunt earum aperiam
            commodi nihil maxime voluptatibus adipisci unde minus. Quibusdam non
            ad ab cum, voluptatem illum aliquid minus et modi sit asperiores!
            Soluta quidem, consequuntur voluptatum quibusdam officia nostrum
            ipsum reiciendis, deleniti voluptatibus molestiae a, autem aperiam
            praesentium qui nam aliquid perspiciatis! Nesciunt quidem magnam in
            temporibus, repudiandae id voluptatum maiores iste ipsum perferendis
            eligendi odio ullam aliquam libero vel sapiente quia laudantium,
            velit non at! Ducimus id aliquam recusandae vel pariatur reiciendis
            voluptatem sunt quisquam, incidunt fugiat aut, quos tempore
            reprehenderit hic sit, ratione numquam eveniet alias quasi itaque?
            Dolor iure ipsum, illum quaerat quo dolores omnis. Quidem provident
            ea, dolore dolorum velit dicta soluta odio repellendus officiis
            porro reiciendis aut corrupti, eius blanditiis, natus error
            consequuntur adipisci quisquam ipsum. Libero nesciunt natus
            excepturi, adipisci, a at molestias non quia deserunt est quibusdam
            nisi, nemo odio corporis? Reiciendis odio magni laborum
            exercitationem nisi consequuntur accusamus, vero provident
            distinctio, repellendus alias dignissimos aut repudiandae, amet
            soluta iste eligendi! Ab, incidunt pariatur culpa beatae vero labore
            consectetur id harum suscipit delectus exercitationem nisi porro
            alias quasi rem totam vel cupiditate tempore tenetur. Maxime quam
            assumenda rerum, illo sint aliquam nulla sit pariatur commodi minus,
            doloribus voluptate soluta ipsum, non perferendis quod dolorum
            voluptatem accusantium cupiditate aliquid! Aliquid, voluptate
            dolorem officia provident incidunt magni aliquam quas quia nihil
            minima exercitationem, repellat dignissimos aspernatur odit
            doloribus quae ratione modi! Accusantium nostrum explicabo omnis
            iste corporis architecto, necessitatibus repudiandae nihil. Repellat
            minus earum pariatur possimus incidunt! Veniam ducimus ipsam ad, et
            minus odit, quaerat alias, reiciendis ipsum incidunt est explicabo
            magni eveniet laborum repellendus? Laboriosam placeat, id distinctio
            provident ex nobis tempore tenetur alias non laborum sequi dolore ab
            accusamus dolores eius necessitatibus cumque incidunt! Iste
            distinctio reiciendis fugiat totam sapiente dolore maiores porro,
            placeat dolores architecto enim.
         </p>
      </div>
   );
}

export default App;
