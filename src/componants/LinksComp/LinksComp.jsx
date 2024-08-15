
import LinksItem from '../linksItem/linksItem';
import './LinksComp.css';

function LinksComp() {
   const ArrayOfObjects = [
      { LinkName: "GitHub", LinkUrl: "https://github.com" },
      { LinkName: "Frontend Mentor", LinkUrl: "https://www.frontendmentor.io" },
      { LinkName: "LinkedIn", LinkUrl: "https://www.linkedin.com" },
      { LinkName: "Twitter", LinkUrl: "https://twitter.com" },
      { LinkName: "Instagram", LinkUrl: "https://www.instagram.com" },
   ];

   return (
      <div id="Links">
         {ArrayOfObjects.map((item, index) => (
            <LinksItem
               key={index}
               LinkName={item.LinkName}
               LinkUrl={item.LinkUrl}>

               </LinksItem>
            
         ))}
      </div>
   );
}

export default LinksComp;
