import styles from '@/components/Utilities/Background/Background.module.css';

const Background = () => {
  return (
    <div className={`${styles.parent} absolute -z-50`}>
      <section className="bg-slate-800/40 w-full h-full blur-[10px]"></section>
    </div>
  );
};

export default Background;
