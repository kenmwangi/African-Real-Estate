import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "src/components/SearchFilters";
import FeaturedListingCard from "src/components/FeaturedListingCard";
import ListLayout from "src/layouts/ListLayout";

const Search = () => {
  const router = useRouter();

  const session = useSession();
  const supabase = useSupabaseClient();

  const [properties, setProperties] = useState([]);
  const [searchFilters, setSearchFilters] = useState(false);

  useEffect(() => {
    supabase
      .from("houses")
      .select(
        "id, created_at, title, price, author, photos, status, address, country, postal_code, county, category, bedrooms, baths, surface_area, property_briefing, additional_info, appliances, email, telephone"
      )
      .order("created_at", { ascending: false })
      .then((result) => {
        setProperties(result.data);
      });
  }, [supabase]);

  return (
    <section className="pb-40">
      <Box>
        <Flex
          cursor="pointer"
          bg="gray.100"
          borderBottom="1px"
          borderColor="gray.200"
          p="2"
          fontWeight="black"
          fontSize="lg"
          alignItems="center"
          justifyContent="center"
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
          <Text>Search Property By Filters</Text>
          <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>

        {searchFilters && <SearchFilters />}

        <Text fontSize="2xl" p="4" fontWeight="bold">
          Properties {router.query.title}
        </Text>

        <Flex alignItems="center" justifyContent="center">
          <ListLayout>
            {properties.map((property) => {
              return (
                <FeaturedListingCard key={property.created_at} {...property} />
              );
            })}
          </ListLayout>
          {properties.length === 0 && (
            <Flex justifyContent="center" alignItems="center">
              <Text fontSize="2xl" marginTop="3">
                No Results Found
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
    </section>
  );
};

export default Search;
