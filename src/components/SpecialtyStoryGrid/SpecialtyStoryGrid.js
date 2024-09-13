import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {QUERIES} from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'markets'
    'sports';
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'markets sports';
    grid-template-columns: 50% 50%;
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  grid-area: markets;
  
  @media ${QUERIES.laptopAndUp} {
    padding-right: 1em;
    margin-right: 1em;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1em;
`;

const SportsSection = styled.section`
  grid-area: sports;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1em;
  
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: revert;
    grid-auto-columns: 175px;
    grid-auto-flow: column;
    overflow-x: scroll;
  }
`;

export default SpecialtyStoryGrid;
