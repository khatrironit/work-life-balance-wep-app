import { getUserConfig } from "@/store/selectors/user";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SettingsForm from "./components/settings-form";
import SettingsList from "./components/settings-list";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import isEmpty from 'lodash/isEmpty';

const UserConfigIndex = () => {
	const userConfig = useSelector(getUserConfig);

	const [isEditing, setEditing] = useState(false)

	useEffect(() => {
		if(isEmpty(userConfig)) setEditing(true);
	}, [userConfig])

	const renderSettings = () => {
		if(isEditing) return <SettingsForm setEditing={setEditing} />
		return <SettingsList userConfig={userConfig} setEditing={setEditing}/>
	}
	return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <div className="card__title">
                <h5 className="bold-text">Settings</h5>
                <h5 className="subhead">Workplace Timings</h5>
              </div>
							{renderSettings()}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserConfigIndex;
