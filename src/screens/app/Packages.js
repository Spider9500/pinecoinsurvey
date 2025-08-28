import React, { useState, useEffect } from 'react';
import PricingCard from '../../components/PricingCard'
import { Box, Card, Container, Divider, Typography } from '@mui/joy';
import Tabs from '../../components/ResponsiveAppBar'

export default function Packages() {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/kelsupdate/8dddea655d66242d84210dff852b3054/raw/da62f46c4c7b5c6b7993415c8ffdbf8539bcdd6b/gistfile1.txt')
            .then(response => response.json())
            .then(data => setPackages(data.surveyPlans));
    }, []);
    return (
        <div>
            <Tabs />

            <Card variant="soft" >
                <Typography level="h3" fontWeight={"bold"}>Select Package</Typography>
                <Divider sx={{ mb: 1 }} />
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))',
                        gap: 1,
                    }} >
                    {
                        packages.map((packageItem, index) => (
                            <div key={index}>
                                <PricingCard data={packageItem} index={index} />
                            </div>
                        ))
                    }
                </Box>
            </Card>
        </div>
    )
}
