import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { Tooltip } from '@material-tailwind/react';

import Sparkles from '../../assets/icons/sparkles.png'
import Dragon from '../../assets/icons/dragon.png'
import Fire from '../../assets/icons/fire.png'
import WaterWave from '../../assets/icons/water_wave.png'
import Environment from './Environment';


export default function EnvironmentList() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        api.getPlaylistContent("PLI3qJXEG_OMQSMJ7koFkwyGA0Njn4SJKo")
          .then((response) => {
            // setResults(response.data.items[0].contentDetails.videoId);
            setResults(response.data.items);
          })
      }, []);

    const handleMixClick = () => {
        // console.log(api.getPlaylistInfo("PLI3qJXEG_OMQSMJ7koFkwyGA0Njn4SJKo"));
        // console.log(api.getPlaylistContent("PLI3qJXEG_OMQSMJ7koFkwyGA0Njn4SJKo"));
        console.log(results);
    }

    return (
        <div class="block px-5 py-5 bg-gray-900 border border-gray-800 shadow-xl rounded-xl max-w-xs">
            <div class="flex justify-between">
                <div class="flex justify-start">
                    <h3 class="text-xl text-white">environments</h3>
                </div>
            </div>

            <div class="flex flex-col px-1 hover:scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-md scrollbar-track-rounded-full overflow-x-scroll overflow-hidden">
                <div class="flex space-x-6 mt-4 w-25 pb-3">
                    <Environment
                        tooltipContent="mix"
                        image={Sparkles}
                        alt="sparkles"
                        handleClick={handleMixClick}
                    />

                    <Environment
                        tooltipContent="spirited away"
                        image={Dragon}
                        alt="dragon"
                        // handleClick={handleMixClick}
                    />

                    <Environment
                        tooltipContent="howl's moving castle"
                        image={Fire}
                        alt="fire"
                        // handleClick={handleMixClick}
                    />

                    <Environment
                        tooltipContent="ocean waves"
                        image={WaterWave}
                        alt="water wave"
                        // handleClick={handleMixClick}
                    />
                </div>
            </div>
        </div>
    )
}