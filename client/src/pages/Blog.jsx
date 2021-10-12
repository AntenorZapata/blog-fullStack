import React from 'react';
import styled from 'styled-components';
import { Container } from '../globalStyles';
import { Link } from 'react-router-dom';
import BlogData from '../data/blog.json';

function Blog() {
  return (
    <>
      <Container>
        <CardRow>
          {BlogData.map((blogDetail, index) => {
            return (
              <Card>
                <CardLink to={`/blog/${blogDetail.id}`}>
                  <CardImage src={blogDetail.image} />
                </CardLink>
                <CardDate>{blogDetail.date}</CardDate>
                <CardLink>
                  <CardHeading>{blogDetail.title}</CardHeading>
                  <CardDescription>{blogDetail.description}</CardDescription>
                </CardLink>
              </Card>
            );
          })}
          <Card>
            <CardLink>
              <CardImage src='https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </CardLink>
            <CardDate>June 17th, 2021</CardDate>
            <CardLink to=''>
              <CardHeading>
                possimus praesentium debitis architecto, dolores, totam eos
                itaque?
              </CardHeading>
              <CardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                animi vel necessitatibus. Eos, error! Quam accusamus laboriosam,
                enim vel numquam unde. Explicabo similique culpa maiores
                aspernatur nihil, amet accusantium recusandae.
              </CardDescription>
            </CardLink>
          </Card>
        </CardRow>
      </Container>
    </>
  );
}

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 33.3%;
  max-width: 33.3%;
  padding: 3rem 0.5rem;

  @media screen and (max-width: 960px) {
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const CardDate = styled.p`
  font-size: 0.9rem;
  color: #9a9a9a;
  font-weight: 600;
  margin-top: 10px;
`;

const CardHeading = styled.h1`
  font-size: 1.5rem;
  margin-top: 10px;

  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease-in-out;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  overflow: hidden !important;
  line-height: 2rem;
  max-height: 8rem;
  display: block;
  display: --webkit-box;
  text-overflow: ellipsis;
  --webkit-line-clamp: 2;
  --webkit-box-orient: vertical;
`;

export default Blog;
