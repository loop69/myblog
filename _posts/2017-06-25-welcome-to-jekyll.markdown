---
layout: news
poster:
    url: http://lorempixel.com/300/200
    name: awesom alt text
tags: [foo,bar, учёба, спорт, успехи, концерт, танцы, развлечения]
title:  "Welcome to Jekyll!"
date:   2017-06-08 18:39:41 +0300
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight javascript %}
       let table = document.createElement("table");
            table.style = "width: 60%; height: 60%; text-align: center; line-height: 100%";

            for(let i = 1; i <=10; i++) {
                let tr = document.createElement("tr");

                for(let j = 1; j <=10; j++) {
                    let td = document.createElement("td");
                    td.appendChild(document.createTextNode(i * j));
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }

            let art = document.querySelector(".palindrom");

            let h3 = document.createElement("h3");

            h3.appendChild(document.createTextNode("Таблица умножения"));

            art.appendChild(h3);

            art.appendChild(table);
            table.firstElementChild.style = "background: white";

            let tabtr = document.querySelectorAll("tr");

            for (let t of tabtr)
                t.firstElementChild.style = "background: white";
{% endhighlight %}

 

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
