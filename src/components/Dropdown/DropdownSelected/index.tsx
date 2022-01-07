import { DropdownOptionType } from '..';
import DropdownCheckbox from '../DropdownCheckbox';
import styles from './DropdownSelected.module.scss';

interface DropdownSelectedProps {
  unselect?: (a: string) => void;
  selectedOptions: DropdownOptionType[];
}

function DropdownSelected({ unselect, selectedOptions }: DropdownSelectedProps) {
  const handleUnselect = (option: string) => () => {
    unselect?.(option);
  };

  return (
    <div className={styles.wrap}>
      {selectedOptions?.map(({ key, value }) => (
        <div key={key} className={styles.tag}>
          <span className={styles.value}>{value}</span>
          <button className={styles.close} onClick={handleUnselect(key)}>
            <DropdownCheckbox isSelected />
          </button>
        </div>
      ))}
    </div>
  );
}

export default DropdownSelected;
