import cn from 'classnames';
import Input from 'components/FormComponents/Input';
import WrapContent from 'components/GridComponents/WrapContent';
import ButtonPrimary from 'components/Buttons/ButtonPrimary';
import H1 from 'components/Typography/H1';
import H2 from 'components/Typography/H2';
import H3 from 'components/Typography/H3';
import H4 from 'components/Typography/H4';
import gap from 'assets/styles/gap.module.scss';
import styles from './uiKit.module.scss';
import Colors from './Colors';
import H5 from 'components/Typography/H5';
import Textarea from 'components/FormComponents/Textarea';
import Dropdown from 'components/Dropdown';
import { memo } from 'react';

const testOptions = [
  { key: 'one', value: 'one' },
  { key: 'two', value: 'two' },
];

const UiKit = () => (
  <div className={styles.wrap}>
    <WrapContent>
      {/* <ChartTest /> */}
      <div className={styles.row}>
        <H1>H1 - Typography</H1>
        <H2>H2 - Typography</H2>
        <H3>H3 - Typography</H3>
        <H4>H4 - Typography</H4>
        <H5>H5 - Typography</H5>
      </div>

      <div className={styles.row}>
        <H2>Colors:</H2>
        <Colors />
      </div>

      <div className={styles.row}>
        <H2>Dropdowns:</H2>
        <div className={cn(styles.grid3, gap.mt8)}>
          <Dropdown
            name="Select"
            selectedOptions={[{ key: 'one', value: 'one' }]}
            options={testOptions}
            onSelect={() => null}
            placeholder="Default"
          />
          <Dropdown
            name="Select"
            isMultiple
            selectedOptions={[{ key: 'one', value: 'one' }]}
            options={testOptions}
            onSelect={() => null}
            placeholder="Search"
          />
        </div>
      </div>

      <div className={styles.row}>
        <H2>Inputs:</H2>
        <div className={cn(styles.grid3, gap.mt8)}>
          <Input placeholder="Default state" />
          <Input isDisabled placeholder="Disabled state" />
          <Input hasError error="Invalid field" placeholder="Error state" />
          <Textarea placeholder="Default state" />
          <Textarea isDisabled placeholder="Disabled state" />
          <Textarea hasError error="Invalid field" placeholder="Error state" />
        </div>
      </div>
      <div className={styles.row}>
        <H2>Buttons:</H2>
        <div className={cn(styles.grid3, gap.mt8)}>
          <ButtonPrimary text="Default" />
          <ButtonPrimary text="Success" uiType="success" />
          <ButtonPrimary text="Warning" uiType="warning" />
          <ButtonPrimary isDisabled text="Default Disabled" />
          <ButtonPrimary isDisabled text="Success Disabled" uiType="success" />
          <ButtonPrimary isDisabled text="Warning Disabled" uiType="warning" />
        </div>
      </div>
    </WrapContent>
  </div>
);

export default memo(UiKit);
