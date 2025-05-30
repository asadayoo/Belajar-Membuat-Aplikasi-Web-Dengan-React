function Button({link}) {
    return <a href={link}>Find out more</a>;
}

function CardHeader({image, category}) {
    return (
        <header>
            <h4>{category}</h4>
            <img src={image} alt="" />
        </header>
    );
}

function CardBody({date, title, content, link}) {
    return (
        <div>
            <p>{date}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            <Button link={link} />
        </div>
    );
}

function Card({image, category, date, title, content, link}) {
    return (
        <article>
            <CardHeader image={image} category={category} />
            <CardBody date={date} title={title} content={content} link={link} />
        </article>
    );
}

function Header({title, subttitle}) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{subttitle}</p>
        </header>
    )
}

function News() {
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://picsum.photos/600/400',
      category: 'Travel',
      link: '#'
    }
  ];
 
return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {someNews.map((news) => (
        <Card {...news} key={news.title}/>
      ))}
    </div>
  );
}

export default News
