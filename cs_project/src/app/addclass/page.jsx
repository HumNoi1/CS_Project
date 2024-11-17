import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const AddClassForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <Card className="max-w-lg mx-auto bg-slate-800 text-white border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Add new class</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input 
                type="text"
                placeholder="Enter class name"
                className="w-full bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-medium">Term</label>
              <Input 
                type="text"
                className="w-full bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-lg font-medium">Subject lessons</label>
              <Input 
                type="text"
                className="w-full bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-center">
              <Button 
                type="submit"
                className="px-8 py-2 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-md transition-colors"
              >
                ADD
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddClassForm;