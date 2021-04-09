import { Typography } from 'antd';
import { DayFoodCreateContainer } from 'components/DayFood/DayFoodCreateContainer';

const { Title } = Typography;

const DayFoodPage = () => (
  <div>
    <Title level={1}>Day food create</Title>
    <DayFoodCreateContainer />
  </div>
);

export default DayFoodPage;
