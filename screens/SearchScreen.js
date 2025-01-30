import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultList from '../components/ResultList';

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResult();
  const [term, setTerm] = useState('')

  const filterResultsByPrice = (price) =>{
    return results.filter((result) =>{
      return result.price === price
    })
  }
  return (
    <View>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={()=>searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : (
        results.length > 0 && (
          <>
            <ResultList title="Ucuz Restoranlar" results={filterResultsByPrice('₺')} />
            <ResultList title="Uygun Restoranlar" results={filterResultsByPrice('₺₺')} />
            <ResultList title="Pahalı Restoranlar" results={filterResultsByPrice('₺₺₺')} />
          </>
        )
      )}
    </View>
  )
}

const styles = StyleSheet.create({})