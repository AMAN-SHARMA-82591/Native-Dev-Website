import React from 'react'
import LatestBlogsComp from './LatestBlogsComp'
import LatestImg1 from '../Images/phone-image.jpg'
import LatestImg2 from '../Images/laptop-image.png'
import LatestImg3 from '../Images/zoo-image.jpg'
function LatestBlogs() {
    return (
        <>
                <h1 className="latest-blogs-main-h1">Latest Blogs</h1>

                <div className="latest-blogs-section-main">
                    <LatestBlogsComp latestBlogsImg={LatestImg2} latestBlogsH1="The 4 Main Components of A Sales Funnel" latestBlogsP="Until you start exploring the world of digital marketing and sales, you may have never heard the term sales."/>
                    <LatestBlogsComp latestBlogsImg={LatestImg1} latestBlogsH1="The 4 Main Components of A Sales Funnel" latestBlogsP="Until you start exploring the world of digital marketing and sales, you may have never heard the term sales."/>
                    <LatestBlogsComp latestBlogsImg={LatestImg3} latestBlogsH1="The 4 Main Components of A Sales Funnel" latestBlogsP="Until you start exploring the world of digital marketing and sales, you may have never heard the term sales."/>
                </div>
        </>
    )
}

export default LatestBlogs
