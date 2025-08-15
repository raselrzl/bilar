

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface FilterProps {
  selectedVäxellåda: string;
  setSelectedVäxellåda: (value: string) => void;
  selectedFordonstyp: string;
  setSelectedFordonstyp: (value: string) => void;
  selectedBränsle: string;
  setSelectedBränsle: (value: string) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const växellådaOptions = ["Alla", "Automatic", "Manual"];
const fordonstypOptions = ["Alla", "Bil", "Karavan"];
const bränsleOptions = ["Alla", "Diesel", "Bensin", "Hybrid", "Elektrisk"];

const Filter = ({
  selectedVäxellåda,
  setSelectedVäxellåda,
  selectedFordonstyp,
  setSelectedFordonstyp,
  selectedBränsle,
  setSelectedBränsle,
  loading,
  setLoading
}: FilterProps) => {

  const resetFilters = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedVäxellåda("Alla");
      setSelectedFordonstyp("Alla");
      setSelectedBränsle("Alla");
      setLoading(false);
    }, 1000);
  };

  return (
        <div className="max-w-5xl xl:max-w-7xl mx-auto px-4 mb-2 md:mb-8 ">
            <div className="flex flex-wrap justify-center items-end gap-6 shadow-2xl py-10 bg-gradient-to-b from-red-300 to-white rounded-xl">
    
              <div className="flex flex-col">
                <Label
                  htmlFor="växellåda-select"
                  className="mb-1 font-semibold text-red-800"
                >
                  Växellåda
                </Label>
                <Select
                  value={selectedVäxellåda}
                  onValueChange={setSelectedVäxellåda}
                >
                  <SelectTrigger className="w-[200px] border-red-800 text-red-800 focus:ring-red-800 focus-visible:ring-red-800">
                    <SelectValue placeholder="Välj växellåda" />
                  </SelectTrigger>
                  <SelectContent>
                    {växellådaOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="text-red-800 focus:bg-red-100"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
    
              <div className="flex flex-col">
                <Label
                  htmlFor="fordonstyp-select"
                  className="mb-1 font-semibold text-red-800"
                >
                  Fordonstyp
                </Label>
                <Select
                  value={selectedFordonstyp}
                  onValueChange={setSelectedFordonstyp}
                >
                  <SelectTrigger className="w-[200px] border-red-800 text-red-800 focus:ring-red-800 focus-visible:ring-red-800">
                    <SelectValue placeholder="Välj fordonstyp" />
                  </SelectTrigger>
                  <SelectContent>
                    {fordonstypOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="text-red-800 focus:bg-red-100"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
    
              <div className="flex flex-col">
                <Label
                  htmlFor="bränsle-select"
                  className="mb-1 font-semibold text-red-800"
                >
                  Bränsle
                </Label>
                <Select value={selectedBränsle} onValueChange={setSelectedBränsle}>
                  <SelectTrigger className="w-[200px] border-red-800 text-red-800 focus:ring-red-800 focus-visible:ring-red-800">
                    <SelectValue placeholder="Välj bränsle" />
                  </SelectTrigger>
                  <SelectContent>
                    {bränsleOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="text-red-800 focus:bg-red-100"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
    
              <div>
                <Button
                  variant="default"
                  className="bg-red-800 hover:bg-red-700 text-white w-[180px] md:min-w-[200px] flex items-center justify-center gap-2"
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setSelectedVäxellåda("Alla");
                      setSelectedFordonstyp("Alla");
                      setSelectedBränsle("Alla");
                      setLoading(false);
                    }, 1000);
                  }}
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Rensa filter
                </Button>
              </div>
            </div>
          </div>
  );
};

export default Filter;
