import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { IconClose } from '../../utils/SvgUtil';

interface TagInputProps {
    options?: string[];
}

const TagInput: React.FC<TagInputProps> = ({ options = [] }) => {
    // Static list of predefined tags
    const [tags] = useState<string[]>(options);

    // State to hold the currently selected tags, including custom entries
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    return (
        <Autocomplete
            multiple
            freeSolo
            options={tags}
            value={selectedTags}
            onChange={(event, newValue) => {
                // Ensure only unique values are added to selectedTags
                const uniqueTags = Array.from(new Set(newValue));
                setSelectedTags(uniqueTags as string[]);
            }}
            renderTags={(value: string[], getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                        key={option}
                        className="bg-blue-100 text-blue-800 font-semibold px-2 rounded-full hover:bg-primary-base cursor-pointer !h-auto !py-0.5 !mr-1"
                        deleteIcon={
                            <div className="rounded-full p-0.5 border ">
                                <IconClose size={14} />
                            </div>
                        }
                        sx={{
                            '& .MuiChip-deleteIcon': {
                                fontSize: '.5rem', // Adjust this value for a smaller icon
                                marginLeft: '0px', // Reduce space between text and delete icon
                            },
                        }}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label=""
                    placeholder="Type to add or select"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            paddingBottom: '7px',
                            paddingTop: '7px',
                            input: {
                                padding: 0
                            },

                            '& .MuiAutocomplete-input': {
                                padding: '3px'
                            }
                        }
                    }
                    }
                />
            )}
            ListboxProps={{
                className: '',
            }}
            renderOption={(props, option) => (
                <li
                    {...props}
                    className="px-4 py-2 hover:bg-primary-base hover:text-white cursor-pointer text-text-dark text-sm"
                >
                    {option}
                </li>
            )}
            className="w-full"
        />
    );
};

export default TagInput;
