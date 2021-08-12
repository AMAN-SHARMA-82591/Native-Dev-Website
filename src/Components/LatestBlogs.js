import React from 'react'
import LatestBlogsComp from './LatestBlogsComp'
import LatestImg1 from '../Images/phone-image.jpg'
import LatestImg2 from '../Images/laptop-image.png'
import LatestImg3 from '../Images/zoo-image.jpg'

function LatestBlogs() {
   
    return (
        <>
                <h1 className="latest-blogs-main-h1">Latest Blogs</h1>
            <div className="responsive-latest-blogs-sec">
                    <div  className="latest-blogs-section-main">
                        <LatestBlogsComp delay="100" duration='1000'  latestBlogsImg={LatestImg2} latestBlogsH1="The 4 Main Components of A Sales Funnel" latestBlogsP="Until you start exploring the world of digital marketing and sales, you may have never heard the term sales."/>

                        <LatestBlogsComp delay="200" duration="1000" latestBlogsImg={LatestImg1} latestBlogsH1="Facebook's News Feed Changes | How Will It Affect Marketers?" latestBlogsP="With a past that caused social media marketers to sit up and pay attention, Facebook CEO, Mark Zuckerberg, recently announced..."/>

                        <LatestBlogsComp delay="350" duration="1000" latestBlogsImg={LatestImg3} latestBlogsH1="A Day At The Google Zoo | The Google Algorithm Animals" latestBlogsP="Well, there may not actually be a Google zoo (yet!), but there is a coteris of animals feature Google..."/>
                    </div>
        
            </div>
          </>
    )
}

export default LatestBlogs
