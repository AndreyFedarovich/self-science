import React, { memo } from 'react';
import ButtonPrimary from 'components/Buttons/ButtonPrimary';
import Dropdown from 'components/Dropdown';
import getButtonUiType from './helpers/getButtonUiType';
import styles from './Panel.module.scss';

interface PanelProps {
  isValidQuestionSet: boolean,
  isActiveQuizSet: boolean,
  errors: string[]
  onActivateSet: () => void
  onDeactivate: () => void
}

const options = [
  'Never', 'Daily', 'Weekly',
];

function Panel({
  onActivateSet, onDeactivate, isValidQuestionSet, isActiveQuizSet, errors,
}: PanelProps) {
  const buttonUiType = getButtonUiType({ isActiveQuizSet, isValidQuestionSet });

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        {isActiveQuizSet ? (
          <ButtonPrimary
            onClick={onDeactivate}
            text="Edit set"
          />) : (
          <ButtonPrimary
            onClick={onActivateSet}
            uiType={buttonUiType}
            text="Start set"
          />
        )}
        <div className={styles.row}>
          <Dropdown
            mode="plain"
            selected={[options[0]]}
            options={options}
            label="Notify me about this set"
          />
        </div>
      </div>
      {!isValidQuestionSet && (
        <div className={styles.errors}>
          {errors.map((error) => <div key={error}>{error}</div>)}
        </div>
      )}
    </div>
  );
}

export default memo(Panel);
