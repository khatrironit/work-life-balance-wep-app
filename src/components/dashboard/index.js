import React, { useMemo } from "react";
import { Card, CardBody, Col, Container, Progress, Row } from "reactstrap";
import { useNotificationContext } from "@/contexts/notification-context";

const DashboardIndex = () => {
  const { waterTimer: waterTimeSecs, breakTimer: breakTimeSecs } =
    useNotificationContext();

  const waterTimer = waterTimeSecs / 1000;
  const breakTimer = breakTimeSecs>0 ? breakTimeSecs / 1000 : 0;
  const { waterBarColor, waterBarText } = useMemo(() => {
    let waterBarColor = "success";
    let waterBarText = "Great! You had taken a sip recently.";
    if (waterTimer > 20 && waterTimer <= 40) {
      waterBarColor = "warning";
      waterBarText = "You should take a sip now.";
    } else if (waterTimer > 40) {
      waterBarColor = "danger";
      waterBarText = "You must take a sip now.";
    }
    return { waterBarColor, waterBarText };
  }, [waterTimer]);

	const { breakBarColor, breakBarText } = useMemo(() => {
    let breakBarColor = "success";
    let breakBarText = "Great! You had taken a break recently.";
    if (breakTimer > 40 && breakTimer <= 60) {
      breakBarColor = "warning";
      breakBarText = "You should take a break now.";
    } else if (breakTimer > 60) {
      breakBarColor = "danger";
      breakBarText = "You must take a break now.";
    }
    return { breakBarColor, breakBarText };
  }, [breakTimer]);
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div className="card__title">
                <h5 className="bold-text">Dashboard</h5>
                <h5 className="subhead">Workplace Health Tracker</h5>
              </div>
              <br />
              <Row>
                <Col>Minutes since you took a sip: {waterTimer}</Col>
                <Col>Status: {waterBarText}</Col>
              </Row>
              <Row>
                <Col>
                  <Progress value={waterTimer} color={waterBarColor}>
                    {waterBarText}
                  </Progress>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>Minutes since you took a break: {breakTimer}</Col>
                <Col>Status: {breakBarText}</Col>
              </Row>
              <Row>
                <Col>
                  <Progress value={breakTimer} color={breakBarColor}>
                    {breakBarText}
                  </Progress>
                </Col>
              </Row>
              <br />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardIndex;
