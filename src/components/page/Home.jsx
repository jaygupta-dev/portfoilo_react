import Header  from '../header/Header'
import Footer  from '../footer/Footer'
import ProfileService  from '../profile/ProfileService'
import Projects  from '../projects/Projects'
import Skill  from '../skills/Skill'
import WorkingPeriod from '../workingperoid/WorkingPeriod'
import BlogArticle  from '../blogarticle/BlogArticle'


function Home(){
return (
   <>
    <Header/>
    <div>
<ProfileService/>
<Projects/>
<Skill/>
<WorkingPeriod/>
<BlogArticle/>
    </div>
    <Footer/>
   </>
);
}

export default Home;