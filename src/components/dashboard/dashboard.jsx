import { v4 as uuidv4 } from 'uuid';
import { createRef } from 'react';
import Input from '../input/input';
import { Button } from '../reused_components/reused_components';
import ideImg from './../../assets/coding-dash.svg';
import './dashboard.css';

const joinID = createRef();

const DashBoard = ({ history }) => {
  const createPlayground = () => {
    const id = uuidv4();
    history.push(`/ide?id=${id}`);
  };
  const joinPlayground = () => {
    history.push(`/ide?id=${joinID.current.value}`);
  };
  return (
    <div className="dashboard">
      <div className="dashboard-btns">
        <div className="join">
          <div className="input-field">
            <Input
              id="play-ground-id"
              type="text"
              text="Enter Editor ID"
              ref={joinID}
            />
            <Button cls="join-btn" text="Join" handler={joinPlayground} />
          </div>
        </div>
        <div className="create">
          <Button cls="create-btn" text="Create" handler={createPlayground} />
        </div>
        <h5>Click on Create or Join To get started</h5>
      </div>
      <div className="dashboard-img">
        <img src={ideImg} alt="dev coding" />
      </div>
    </div>
  );
};

export default DashBoard;
