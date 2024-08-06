const Container = ({
  children,
  className,
  style,
}: {
  children: any;
  className?: any;
  style?: any;
}) => {
  return (
    <div className={`${className} p-5`} style={style}>
      {children}
    </div>
  );
};

export default Container;
