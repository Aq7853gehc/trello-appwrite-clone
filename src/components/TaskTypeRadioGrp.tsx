  "use client";

  import { useBoardStore } from "@/store/Boardstore";
  import { RadioGroup } from "@headlessui/react";
  import { CheckCircleIcon } from "@heroicons/react/16/solid";

  const types = [
    {
      id: "todo",
      name: "Todo",
      discription: "A new task to be completed",
      color: "bg-red-500",
    },
    {
      id: "inprogress",
      name: "In Progress",
      discription: "A  task that is currently being worked on",
      color: "bg-yellow-500",
    },
    {
      id: "done",
      name: "Done",
      discription: "A  task that has been completed ",
      color: "bg-green-500",
    },
  ];

  type Props = {};

  const TaskTypeRadioGrp = (props: Props) => {
    const [newTaskType, setNewTaskType] = useBoardStore((state) => [
      state.newTaskType,
      state.setNewTaskType,
    ]);

    return (
      <>
        <div className="w-full py-5">
          <div className="mx-auto w-full max-w-md">
            <RadioGroup value={newTaskType} onChange={setNewTaskType}>
              <div className="space-y-2">
                {/* Map of th */}
                {types.map((type) => (
                  <RadioGroup.Option
                    key={type.id}
                    value={type.id}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                          : ""
                      }
                    ${
                      checked
                        ? `${type.color} bg-opacity-75 text-white `
                        : "bg-white"
                    }
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${
                                  checked ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {type.name}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? "text-sky-100" : "text-gray-500"
                                }`}
                              >
                                <span>{type.discription}</span>
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked && (
                            <div className="shrink-0 text-white">
                              <CheckCircleIcon className="h-6 w-6" />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))} 
              </div>
            </RadioGroup>
          </div>
        </div>
      </>
    );
  };

  export default TaskTypeRadioGrp;
