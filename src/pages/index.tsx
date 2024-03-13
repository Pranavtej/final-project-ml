
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MultiSelect } from "react-multi-select-component"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Icons } from "@/components/ui/icons"

export default function Component() {

  const options = [
    { label: "itching", value: "itching" },
    { label: "skin_rash", value: "skin_rash" },
    { label: "nodal_skin_eruptions", value: "nodal_skin_eruptions" },
    { label: "continuous_sneezing", value: "continuous_sneezing" },
    { label: "shivering", value: "shivering" },
    { label: "chills", value: "chills" },
    { label: "joint_pain", value: "joint_pain" },
    { label: "stomach_pain", value: "stomach_pain" },
    { label: "acidity", value: "acidity" },
    { label: "ulcers_on_tongue", value: "ulcers_on_tongue" },
    { label: "muscle_wasting", value: "muscle_wasting" },
    { label: "vomiting", value: "vomiting" },
    { label: "burning_micturition", value: "burning_micturition" },
    { label: "spotting_urination", value: "spotting_urination" },
    { label: "fatigue", value: "fatigue" },
    { label: "weight_gain", value: "weight_gain" },
    { label: "anxiety", value: "anxiety" },
    { label: "cold_hands_and_feets", value: "cold_hands_and_feets" },
    { label: "mood_swings", value: "mood_swings" },
    { label: "weight_loss", value: "weight_loss" },
    { label: "restlessness", value: "restlessness" },
    { label: "lethargy", value: "lethargy" },
    { label: "patches_in_throat", value: "patches_in_throat" },
    { label: "irregular_sugar_level", value: "irregular_sugar_level" },
    { label: "cough", value: "cough" },
    { label: "high_fever", value: "high_fever" },
    { label: "sunken_eyes", value: "sunken_eyes" },
    { label: "breathlessness", value: "breathlessness" },
    { label: "sweating", value: "sweating" },
    { label: "dehydration", value: "dehydration" },
    { label: "indigestion", value: "indigestion" },
    { label: "headache", value: "headache" },
    { label: "yellowish_skin", value: "yellowish_skin" },
    { label: "dark_urine", value: "dark_urine" },
    { label: "nausea", value: "nausea" },
    { label: "loss_of_appetite", value: "loss_of_appetite" },
    { label: "pain_behind_the_eyes", value: "pain_behind_the_eyes" },
    { label: "back_pain", value: "back_pain" },
    { label: "constipation", value: "constipation" },
    { label: "abdominal_pain", value: "abdominal_pain" },
    { label: "diarrhoea", value: "diarrhoea" },
    { label: "mild_fever", value: "mild_fever" },
    { label: "yellow_urine", value: "yellow_urine" },
    { label: "yellowing_of_eyes", value: "yellowing_of_eyes" },
    { label: "acute_liver_failure", value: "acute_liver_failure" },
    { label: "fluid_overload", value: "fluid_overload" },
    { label: "swelling_of_stomach", value: "swelling_of_stomach" },
    { label: "swelled_lymph_nodes", value: "swelled_lymph_nodes" },
    { label: "malaise", value: "malaise" },
    { label: "blurred_and_distorted_vision", value: "blurred_and_distorted_vision" },
    { label: "phlegm", value: "phlegm" },
    { label: "throat_irritation", value: "throat_irritation" },
    { label: "redness_of_eyes", value: "redness_of_eyes" },
    { label: "sinus_pressure", value: "sinus_pressure" },
    { label: "runny_nose", value: "runny_nose" },
    { label: "congestion", value: "congestion" },
    { label: "chest_pain", value: "chest_pain" },
    { label: "weakness_in_limbs", value: "weakness_in_limbs" },
    { label: "fast_heart_rate", value: "fast_heart_rate" },
    { label: "pain_during_bowel_movements", value: "pain_during_bowel_movements" },
    { label: "pain_in_anal_region", value: "pain_in_anal_region" },
    { label: "bloody_stool", value: "bloody_stool" },
    { label: "irritation_in_anus", value: "irritation_in_anus" },
    { label: "neck_pain", value: "neck_pain" },
    { label: "dizziness", value: "dizziness" },
    { label: "cramps", value: "cramps" },
    { label: "bruising", value: "bruising" },
    { label: "obesity", value: "obesity" },
    { label: "swollen_legs", value: "swollen_legs" },
    { label: "swollen_blood_vessels", value: "swollen_blood_vessels" },
    { label: "puffy_face_and_eyes", value: "puffy_face_and_eyes" },
    { label: "enlarged_thyroid", value: "enlarged_thyroid" },
    { label: "brittle_nails", value: "brittle_nails" },
    { label: "swollen_extremeties", value: "swollen_extremeties" },
    { label: "excessive_hunger", value: "excessive_hunger" },
    { label: "extra_marital_contacts", value: "extra_marital_contacts" },
    { label: "drying_and_tingling_lips", value: "drying_and_tingling_lips" },
    { label: "slurred_speech", value: "slurred_speech" },
    { label: "knee_pain", value: "knee_pain" },
    { label: "hip_joint_pain", value: "hip_joint_pain" },
    { label: "muscle_weakness", value: "muscle_weakness" },
    { label: "stiff_neck", value: "stiff_neck" },
    { label: "swelling_joints", value: "swelling_joints" },
    { label: "movement_stiffness", value: "movement_stiffness" },
    { label: "spinning_movements", value: "spinning_movements" },
    { label: "loss_of_balance", value: "loss_of_balance" },
    { label: "unsteadiness", value: "unsteadiness" },
    { label: "weakness_of_one_body_side", value: "weakness_of_one_body_side" },
    { label: "loss_of_smell", value: "loss_of_smell" },
    { label: "bladder_discomfort", value: "bladder_discomfort" },
    { label: "foul_smell_of_urine", value: "foul_smell_of_urine" },
    { label: "continuous_feel_of_urine", value: "continuous_feel_of_urine" },
    { label: "passage_of_gases", value: "passage_of_gases" },
    { label: "internal_itching", value: "internal_itching" },
    { label: "toxic_look_(typhos)", value: "toxic_look_(typhos)" },
    { label: "depression", value: "depression" },
    { label: "irritability", value: "irritability" },
    { label: "muscle_pain", value: "muscle_pain" },
    { label: "altered_sensorium", value: "altered_sensorium" },
    { label: "red_spots_over_body", value: "red_spots_over_body" },
    { label: "belly_pain", value: "belly_pain" },
    { label: "abnormal_menstruation", value: "abnormal_menstruation" },
    { label: "dischromic_patches", value: "dischromic_patches" },
    { label: "watering_from_eyes", value: "watering_from_eyes" },
    { label: "increased_appetite", value: "increased_appetite" },
    { label: "polyuria", value: "polyuria" },
    { label: "family_history", value: "family_history" },
    { label: "mucoid_sputum", value: "mucoid_sputum" },
    { label: "rusty_sputum", value: "rusty_sputum" },
    { label: "lack_of_concentration", value: "lack_of_concentration" },
    { label: "visual_disturbances", value: "visual_disturbances" },
    { label: "receiving_blood_transfusion", value: "receiving_blood_transfusion" },
    { label: "receiving_unsterile_injections", value: "receiving_unsterile_injections" },
    { label: "coma", value: "coma" },
    { label: "stomach_bleeding", value: "stomach_bleeding" },
    { label: "distention_of_abdomen", value: "distention_of_abdomen" },
    { label: "history_of_alcohol_consumption", value: "history_of_alcohol_consumption" },
    { label: "fluid_overload.1", value: "fluid_overload.1" },
    { label: "blood_in_sputum", value: "blood_in_sputum" },
    { label: "prominent_veins_on_calf", value: "prominent_veins_on_calf" },
    { label: "palpitations", value: "palpitations" },
    { label: "painful_walking", value: "painful_walking" },
    { label: "pus_filled_pimples", value: "pus_filled_pimples" },
    { label: "blackheads", value: "blackheads" },
    { label: "scurring", value: "scurring" },
    { label: "skin_peeling", value: "skin_peeling" },
    { label: "silver_like_dusting", value: "silver_like_dusting" },
    { label: "small_dents_in_nails", value: "small_dents_in_nails" },
    { label: "inflammatory_nails", value: "inflammatory_nails" },
    { label: "blister", value: "blister" },
    { label: "red_sore_around_nose", value: "red_sore_around_nose" },
    { label: "yellow_crust_ooze", value: "yellow_crust_ooze" }
];



  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setResult('')
  }
  ,[selected])  

  const handleSubmit = () => {
        setLoading(true)
        try{
        axios.post('https://continuing-pierette-takshalabs.koyeb.app/predict', {
          options: selected
        }).then((res) => {

          console.log(res.data)
          setResult(res.data)
          toast.success("Predicted Successfully ! ", {
            icon: "🚀",
            description : `Processed in ${Math.random().toFixed(5)} seconds`,
            position: "bottom-right",
          })
          setLoading(false)
        }).catch((err) => {
          // setResult("asdfghj")
          setLoading(false)
          toast.error("Failed to predict !", {
            position: "bottom-right",
            closeButton: true,
          })
          console.log(err)
        }
        )
      }
      catch(err){
        // setResult("asdfghj")
        setLoading(false)
        toast.error("Failed to predict !", {
          position: "top-right",
          closeButton: true,
        })
        console.log(err)
      }
      
  }

  const handleKnowMore = () => {
    window.open('https://www.google.com/search?q=' + result, '_blank')
  }

  return (
    <>
      <Toaster />
    <div className="flex flex-col min-h-[100dvh]">
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <p className="font-bold mobile: text-xs  ">Disease Prediction ✅</p>
        <span className="sr-only">Disease Prediction</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/papers">
          Papers
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/resources">
          Resources
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/team">
          Team
        </Link>
      </nav>
    </header>
    <main className="flex-1">
      <section className="w-full pt-6  pb-4 sm:pt-12 sm:pb-4 md:py-24 lg:pt-32 xl: p-t-2">
        <div className="container grid items-center gap-6 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold  tracking-normal sm:text-4xl md:text-5xl lg:text-6xl/none">
              Disease Prediction
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                select your symptoms and get the prediction of your disease
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-8">
                  <MultiSelect  
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select Symptoms"
                    onCreateOption={(inputValue :any) => {
                      console.log(inputValue)
                    }
                    }
                  />
              {/* <Input className="max-w-lg flex-1" placeholder="Enter your link" type="url"
              /> */}
              <Button
              disabled={loading || selected.length === 0} 
              onClick={handleSubmit}
              > {loading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}Predict Desease</Button>
            { selected.length == 0  && <p className="text-xs mt-0 ">select some symptoms to predict </p>}
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center">
  <div className="w-[90%] max-w-sm">
    {
      result &&( <Card>
        <CardHeader>
          <CardTitle>Result 🚨</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2" >
            <div className="felx">
         <p className="text-xs">
            Selected Symptoms : {selected.map((item : {value : string ,label :string}) => item.label).join(', ')}
          </p>
          </div>
          <div className="felx">
          <p className="text-sm font-medium">
           Predicted Disease :  {result}
          </p>
          </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row gap-4 justify-between">
            <div className="flex">
            <Button  variant={"link"} onClick={() =>{
              setResult('')
              setSelected([])
            }}>Clear</Button>
            </div>
            <div className="flex">
            <Button variant={"outline"} onClick={handleKnowMore}>Know More </Button>
            </div>
          </div>
        </CardFooter>
      </Card>)
    }
   
  </div>
</section>

    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 desease-prediction . All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/Pranavtej/final-project-ml">
          Github
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/Pranavtej/final-project-ml">
          Model
        </Link>
      </nav>
    </footer>
  </div>
  </>
    
  )
}

