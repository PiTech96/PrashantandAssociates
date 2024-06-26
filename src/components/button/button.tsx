import styled from 'styled-components';
import colors from '../../theme/defaultTheme/colors';

const CustomButton = styled.button`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: ${props=> props.color};
  padding: 10px 22px;
  border:${props=> props.color} solid 1.4px;
  text-shadow: none;
  background: transparent;
  cursor: pointer;
  box-shadow: transparent;
  transition: 0.5s ease;
  user-select: none;

  &:hover {
    background: ${colors.primary.p50}; // Use your primary color here
    border: 1px solid ${colors.primary.p50}; // Use your primary color here
    color: ${colors.white};
    box-shadow: 0 0 5px ${colors.primary.p50}, 0 0 20px ${colors.primary.p50}, 0 0 50px ${colors.primary.p50}, 0 0 100px ${colors.primary.p50};
  }

  > span {
    font-weight: 600;
  }
`;

export default CustomButton;