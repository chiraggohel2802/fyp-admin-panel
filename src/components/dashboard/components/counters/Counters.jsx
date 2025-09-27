import { StatisticsCounter } from 'components/core';
import useCounters from './hooks/useCounters';
import { Col, Row } from 'react-bootstrap';
import React from 'react';

const Counters = () => {
  const { countersData } = useCounters();
  return (
    <Row>
      {countersData.map((props, i) => (
        <Col key={`dashboard-counters-${i}`} xl={3} sm={6}>
          <StatisticsCounter {...props} />
        </Col>
      ))}
    </Row>
  );
};

export default Counters;
