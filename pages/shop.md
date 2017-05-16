---
layout: page
show_meta: false
title: "Travel shop"
subheadline: "All you need to prepare your next trip"
header:
   image_fullwidth: "fullwidth-hawaii-volcanoroad.jpg"
permalink: "/shop/"
---



<a target="_blank"  href="https://www.amazon.com/gp/product/B019UTI40Y/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B019UTI40Y&linkCode=as2&tag=gdaytravelers-20&linkId=2e631ded73798448099535f0046da3fc"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B019UTI40Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=gdaytravelers-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=gdaytravelers-20&l=am2&o=1&a=B019UTI40Y" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />


<ul>
    {% for post in site.categories.design %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>