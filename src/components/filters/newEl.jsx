function MyListbox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
  
    return (
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        {({ open }) => (
          <>
            <Listbox.Button>{selectedPerson.name}</Listbox.Button>
            {open && (
              <div>
                {/*
                  Using the `static` prop, the `Listbox.Options` are always
                  rendered and the `open` state is ignored.
                */}
                <Listbox.Options static>
                  {people.map((person) => (
                    <Listbox.Option key={person.id} value={person}>
                      {person.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            )}
          </>
        )}
      </Listbox>
    )
  }