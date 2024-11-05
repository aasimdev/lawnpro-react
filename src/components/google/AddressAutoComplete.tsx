import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { TextField } from '@mui/material';
import { Library } from '@googlemaps/js-api-loader';

type AddressFormProps = {
    onAddressSelect?: (address: Address) => void;
};

type Address = {
    line1: string;
    line2: string;
    country: string;
    state: string;
    city: string;
    zip: string;
};
const libraries:Library[] = ['places']; // Define the libraries array outside the component

const AddressAutocomplete: React.FC<AddressFormProps> = ({ onAddressSelect }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
        libraries,
    });

    const [address, setAddress] = useState<Address>({
        line1: '',
        line2: '',
        country: '',
        state: '',
        city: '',
        zip: '',
    });

    const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
        const addressComponents = place.address_components;
        if (!addressComponents) return;
        

        const updatedAddress: Address = {
            line1: place.formatted_address || '',
            line2: '',
            country: '',
            state: '',
            city: '',
            zip: '',
        };

        addressComponents.forEach(component => {
            const types = component.types;
            if (types.includes('street_number')) {
                updatedAddress.line1 = `${component.long_name}`;
            } else if (types.includes('route')) {
                updatedAddress.line1 += ` ${component.long_name}`;
            } else if (types.includes('locality')) {
                updatedAddress.city = component.long_name;
            } else if (types.includes('administrative_area_level_1')) {
                updatedAddress.state = component.short_name;
            } else if (types.includes('country')) {
                updatedAddress.country = component.long_name;
            } else if (types.includes('postal_code')) {
                updatedAddress.zip = component.long_name;
            }
        });

        updatedAddress.line1 = `${updatedAddress.line1.trim()}${updatedAddress.city?", "+updatedAddress.city:""}${updatedAddress.state?", "+updatedAddress.state:""}${updatedAddress.country?", "+address.country:""}`
        
        setAddress(updatedAddress);
        onAddressSelect?.(updatedAddress);
    };

    const initAutocomplete = (input: HTMLInputElement) => {
        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.setFields(['address_components', 'formatted_address']);
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place) handlePlaceSelect(place);
        });
    };

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-2 text-sm font-medium gap-4">
            <div className='col-span-2 flex flex-col gap-1'>
                <span className='flex items-start gap-1'>Address Line 1<span className="text-red-600 text-xs">*</span></span>
                <TextField type='text' variant="outlined" placeholder="Address Line 1"
                    inputRef={input => input && initAutocomplete(input)}
                    value={address.line1}
                    onChange={(e) => setAddress({ ...address, line1: e.target.value })} />
            </div>
            <div className='col-span-2 flex flex-col gap-1'>
                <span>Address Line 2</span>
                <TextField type='text' variant="outlined" placeholder="Address Line 2"
                    value={address.line2}
                    onChange={(e) => setAddress({ ...address, line2: e.target.value })} />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
                <span>State</span>
                <TextField type='text' variant="outlined" placeholder="State"
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })} />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
                <span>Country</span>
                <TextField type='text' variant="outlined" placeholder="Country"
                    value={address.country}
                    onChange={(e) => setAddress({ ...address, country: e.target.value })} />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
                <span>City</span>
                <TextField type='text' variant="outlined" placeholder="City"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })} />
            </div>
            <div className='col-span-1 flex flex-col gap-1'>
                <span>Zip Code</span>
                <TextField type='text' variant="outlined" placeholder="Zip Code"
                    value={address.zip}
                    onChange={(e) => setAddress({ ...address, zip: e.target.value })} />
            </div>
        </div>
    );
};

export default AddressAutocomplete;
