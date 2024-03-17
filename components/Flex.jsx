export default function Flex({ width='full', direction = 'row', children }) {
    return (
      <div className={`w-${width} flex flex-${direction}`}>
         {children}
      </div>
    );
}