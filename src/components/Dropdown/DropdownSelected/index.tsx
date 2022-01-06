import DropdownCheckbox from '../DropdownCheckbox';
import styles from './DropdownSelected.module.scss';

interface DropdownSelectedProps {
  unselect?: (a: string) => void;
  selected: string[];
}

function DropdownSelected({ unselect, selected }: DropdownSelectedProps) {
  const handleUnselect = (option: string) => () => {
    unselect?.(option);
  };

  return (
    <div className={styles.wrap}>
      {selected?.map((option: string) => (
        <div key={option} className={styles.tag}>
          <span className={styles.value}>{option}</span>
          <button className={styles.close} onClick={handleUnselect(option)}>
            <DropdownCheckbox isSelected />
          </button>
        </div>
      ))}
    </div>
  );
}

export default DropdownSelected;
