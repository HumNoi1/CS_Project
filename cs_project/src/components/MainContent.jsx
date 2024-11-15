import GridItem from './GridItem';

const MainContent = () => {
  return (
    <div className="flex-grow p-6">
      <h1 className="text-xl text-white mb-6">Home</h1>
      <div className="grid grid-cols-12 gap-4">
        <GridItem.Add />
        <GridItem.Folder name="software engineer" />
      </div>
    </div>
  );
};

export default MainContent;