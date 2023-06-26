import { createContext, useEffect, useState } from "react";

const ValueContext = createContext({});

export const ValueProvider = ({ children }) => {
    const [fromValue, setFromValue] = useState({
        "_id": "6334186a247c5bf04496e838",
        "name": "Dhaka,Hazrat Shahjalal International Airport (DAC)"
    })
    const [toValue, setToValue] = useState({
        "_id": "6334186a247c5bf044970863",
        "name": "Coxs Bazaar,Coxs Bazar Airport (CXB)"
    })

    const dateForJourney = new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000));
    const dateForReturn = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000));

    const [journeyDate, setJourneyDate] = useState(dateForJourney);
    const [returnDate, setReturnDate] = useState(dateForReturn);

    // const [selectedFlight, setSelectedFlight] = useState({})

    const [passengerAndClassOpen, setPassengerAndClassOpen] = useState(false);
    const [passengersTotal, setPassengersTotal] = useState([{ "Code": "ADT", "Quantity": 1 }])
    const getPassengerQuantitty = localStorage.getItem('passengerQuantity');
    const [passengerQuantittyForForm, setPassengerQuantittyForForm] = useState(JSON.parse(getPassengerQuantitty) || [{ "NameNumber": `${1 + 0}.1`, "Infant": false, "PassengerType": "ADT", "NameReference": "" }])

    const flightTypes = JSON.parse(localStorage.getItem("flightType"));
    const [flightType, setFlightType] = useState(flightTypes || 'roundTrip');


    localStorage.setItem("flightType", JSON.stringify(flightType));

    const orDiInfos = JSON.parse(localStorage.getItem("orDiInfos"));
    const [orDiInfo, setOrDiInfo] = useState(orDiInfos)
    localStorage.setItem("orDiInfos", JSON.stringify(orDiInfo));



    const selectedCities = JSON.parse(localStorage.getItem("cities"));
    // with multiCity function start here
    const [cities, setCities] = useState(selectedCities || [{
        fromSelectedItem: 'Dhaka,Hazrat Shahjalal International Airport (DAC)',
        toSelectedItem: 'Dubai,Dubai Intl Arpt (DXB)',
        journeyDate: dateForJourney,
    }]);

    // console.log(selectedCities)
    localStorage.setItem("cities", JSON.stringify(cities));
    // console.log(cities)
    useEffect(() => {
        cities.map(({ fromSelectedItem, toSelectedItem, journeyDate, returnDate }) => {
            if (flightType === "oneWay") {
                setOrDiInfo([{
                    "DepartureDateTime": `${journeyDate}T00:00:00`,
                    "DestinationLocation": {
                        "LocationCode": toSelectedItem && toSelectedItem.split("(")[1].slice(0, 3)
                    },
                    "OriginLocation": {
                        "LocationCode": fromSelectedItem && fromSelectedItem.split("(")[1].slice(0, 3)
                    },
                    "RPH": `0`
                }])
            }
            if (flightType === "roundTrip") {
                setOrDiInfo([
                    {
                        "DepartureDateTime": `${journeyDate}T00:00:00`,
                        "DestinationLocation": {
                            "LocationCode": toSelectedItem && toSelectedItem.split("(")[1].slice(0, 3)
                        },
                        "OriginLocation": {
                            "LocationCode": fromSelectedItem && fromSelectedItem.split("(")[1].slice(0, 3)
                        },
                        "RPH": `0`
                    },
                    {
                        "DepartureDateTime": `${returnDate}T00:00:00`,
                        "DestinationLocation": {
                            "LocationCode": fromSelectedItem && fromSelectedItem.split("(")[1].slice(0, 3)
                        },
                        "OriginLocation": {
                            "LocationCode": toSelectedItem && toSelectedItem.split("(")[1].slice(0, 3)
                        },
                        "RPH": `1`
                    }
                ])
            }

        });

        if (flightType === "multiCity") {

            setOrDiInfo(cities.map(({ fromSelectedItem, toSelectedItem, journeyDate, returnDate }, i) => (
                {
                    "DepartureDateTime": `${journeyDate}T00:00:00`,
                    "DestinationLocation": {
                        "LocationCode": toSelectedItem && toSelectedItem.split("(")[1].slice(0, 3)
                    },
                    "OriginLocation": {
                        "LocationCode": fromSelectedItem && fromSelectedItem.split("(")[1].slice(0, 3)
                    },
                    "RPH": `${i}`
                }
            )))
        }



    }, [cities, flightType])
    // console.log(orDiInfo)
    const [isInternationalFlight, setIsInternationalFlight] = useState(true)
    const [availableFlightsFilter, setAvailableFlightsFilter] = useState([]);

    const [selectedAvailableFlightsFilter, setSelectedAvailableFlightsFilter] = useState([]);
    const [selectedStopsCounts, setSelectedStopsCounts] = useState([]);
    const [selectedWeights, setSelectedWeights] = useState([]);

    const [selectedDepartureTime, setSelectedDepartureTime] = useState([]);
    const [selectedArrivalTime, setSelectedArrivalTime] = useState([]);


    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);


    const [lowestFare, setLowestFare] = useState(0);
    const [highestFare, setHighestFare] = useState(1000);

    // =============
    // To Show and Hide function 
    const [showFromInput, setShowFromInput] = useState(false);
    const [showToInput, setShowToInput] = useState(false);
    const [showJourneyDate, setShowJourneyDate] = useState(false);
    const [showReturnDate, setShowReturnDate] = useState(false);

    const [fromCityQuery, setFromCityQuery] = useState('');
    const [toCityQuery, setToCityQuery] = useState('');

    const [targetTimestamp, setTargetTimestamp] = useState(null);

    const [remainingTime, setRemainingTime] = useState(null);


    return (
        <ValueContext.Provider value={{
            toValue, setToValue, fromValue, setFromValue, returnDate, setReturnDate, journeyDate, setJourneyDate, flightType, setFlightType, orDiInfo, passengersTotal, setPassengersTotal, passengerQuantittyForForm, setPassengerQuantittyForForm, passengerAndClassOpen, setPassengerAndClassOpen, cities, setCities, isInternationalFlight, setIsInternationalFlight, availableFlightsFilter, setAvailableFlightsFilter, selectedAvailableFlightsFilter, setSelectedAvailableFlightsFilter, selectedStopsCounts, setSelectedStopsCounts, selectedWeights, setSelectedWeights, showFromInput, setShowFromInput, showToInput, setShowToInput, showJourneyDate, setShowJourneyDate, showReturnDate, setShowReturnDate, fromCityQuery, setFromCityQuery, toCityQuery, setToCityQuery, selectedDepartureTime, setSelectedDepartureTime,
            selectedArrivalTime, setSelectedArrivalTime,
            minPrice, setMinPrice,
            maxPrice, setMaxPrice,
            lowestFare, setLowestFare, highestFare, setHighestFare, targetTimestamp, setTargetTimestamp, remainingTime, setRemainingTime
        }}>
            {children}
        </ValueContext.Provider>
    )
}


export default ValueContext;